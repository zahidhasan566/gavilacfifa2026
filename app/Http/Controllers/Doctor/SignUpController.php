<?php

namespace App\Http\Controllers\Doctor;

use App\Http\Controllers\Controller;
use App\Models\DOCTORS;
use App\Models\User;
use App\Models\Users;
use App\Traits\CommonTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SignUpController extends Controller
{
    use CommonTrait;
    public function signUp(Request $request)
    {
        // Validate input
        $validator = Validator::make($request->all(), [
            'DoctorName' => 'required|string|max:100',
            'SelectedDistrict' => 'required',
            'MobileNo' => 'required|string|max:15',
            'Password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        DB::beginTransaction();

        try {
            // Get Doctor role ID
            $roleId = DB::table('Roles')
                ->where('RoleName', 'Doctor')
                ->value('RoleId');

            if (!$roleId) {
                throw new \Exception('Doctor role not found');
            }

            $doctorCode = $this->generateDoctorCode();

            // Handle photo upload
            $photoPath = null;
            if ($request->hasFile('ProfileImage')) {
                $photoPath = $request->file('ProfileImage')->store('DoctorProfileImage', 'public');
            }

            // Password
            $passwordData = DB::select("select dbo.ufn_PasswordEncode('$request->Password') as RawPass");

            if($request->MobileNo ){
                $findMobileNumber = Users::where('MobileNumber', $request->MobileNo)->first();
                if(!empty($findMobileNumber->MobileNumber) && empty($findMobileNumber->IsVerified)){
                    return response()->json([
                        'status' => 'error',
                        'message' => 'Mobile Number already exists',
                        'type' => 'NotVerified',
                        'data' => $findMobileNumber
                    ],200 );
                }
            }

            // Generate 6-digit random number
            $SixDigitRandomNumber = rand(100000, 999999);

            // Insert into Users table
            $userId = DB::table('Users')->insertGetId([
                'RoleId' => $roleId,
                'Username' => $request->DoctorName,
                'MobileNumber' => $request->MobileNo,
                'Password' => $passwordData[0]->RawPass,
                'FullName' => $request->DoctorName,
                'VerificationCode' => $SixDigitRandomNumber,
                'IsActive' => 1,
                'CreatedAt' => now(),
                'UpdatedAt' => now()
            ]);

            // Insert into Doctors table
            $doctorId = DB::table('Doctors')->insertGetId([
                'UserId' => $userId,
                'DoctorCode' => $doctorCode,
                'DoctorName' => $request->DoctorName,
                'MobileNumber' => $request->MobileNo,
                'Password' => $passwordData[0]->RawPass,
                'ProfilePic' => $photoPath,
                'Region' => $request->SelectedDistrict['name'],
                'TotalPoints' => 0,
                'CreatedAt' => now(),
                'UpdatedAt' => now()
            ]);

            $smscontent = 'ওয়ার্ল্ড কাপ (গ্যাভিলাক) প্রেডিক্টশন ভেরিফিকেশন এর জন্য আপনার OTP কোডটি হলো- ' . $SixDigitRandomNumber;
            $respons = $this->sendSmsQ($request->MobileNo, '8809617614917', 'GavilacWCP', 'GavilacWCP', '', $doctorCode, 'smsq', $smscontent);;
            $responseStatus = json_decode($respons)->message;

            DB::commit();
            if (json_decode($respons)->success === true) {
                return response()->json([
                    'success' => true,
                    'message' => 'Doctor registered successfully',
                    'type' => 'success',
                    'data' => [
                        'user_id' => $userId,
                        'doctor_id' => $doctorId,
                        'doctor_name' => $request->DoctorName,
                        'mobile_number' => $request->MobileNo,
                    ]
                ], 201);
            }


        } catch (\Exception $e) {
            DB::rollBack();

            return response()->json([
                'success' => false,
                'message' => 'Registration failed: ' . $e->getMessage()
            ], 500);
        }
    }

    public function registrationVerification(Request $request){
        // Validate input
        $request->validate([
            'MobileNo' => 'required|numeric',  // Ensure MobileNo is provided and is numeric
            'UserVerificationCode' => 'required|numeric'  // Ensure VerificationCode is provided and is numeric
        ]);

        // Find the user based on the provided MobileNo
        $user = Users::where('MobileNumber', $request->MobileNo)->first();

        // Check if user exists
        if ($user) {
            // Check if the verification code matches
            if ($user->VerificationCode == $request->UserVerificationCode) {
                return response()->json([
                    'success' => true,
                    'message' => 'Verification Success'
                ], 200);
            } else {
                // Verification code does not match
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid verification code'
                ], 400);
            }
        } else {
            // User not found
            return response()->json([
                'success' => false,
                'message' => 'User not found with this mobile number'
            ], 404);
        }
    }

    public function resendOtp(Request $request){
        // Validate input
        $request->validate([
            'MobileNo' => 'required|numeric',  // Ensure MobileNo is provided and is numeric
        ]);

        // Find the user based on the provided MobileNo
        $user = Users::where('MobileNumber', $request->MobileNo)->first();

        // Check if user exists
        if ($user) {

            // Generate 6-digit random number
            $SixDigitRandomNumber = rand(100000, 999999);
            $smscontent = 'ওয়ার্ল্ড কাপ (গ্যাভিলাক) প্রেডিক্টশন ভেরিফিকেশন এর জন্য আপনার OTP কোডটি হলো- ' . $SixDigitRandomNumber;
            $respons = $this->sendSmsQ($request->MobileNo, '8809617614917', 'GavilacWCP', 'GavilacWCP', '', $request->MobileNo, 'smsq', $smscontent);;
            $responseStatus = json_decode($respons)->message;
            if (json_decode($respons)->success === true) {

                $user = Users::where('MobileNumber', $request->MobileNo)->update([
                    'VerificationCode' => $SixDigitRandomNumber,
                    'UpdatedAt' => Carbon::now()
                ]);

                return response()->json([
                    'success' => true,
                    'message' => 'OTP Resent successfully',
                ], 200);
            }
        } else {
            // User not found
            return response()->json([
                'success' => false,
                'message' => 'User not found with this mobile number'
            ], 404);
        }
    }

    function sendSmsQ($to, $sId, $applicationName, $moduleName, $otherInfo, $userId, $vendor, $message)
    {

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://192.168.102.10/apps/api/send-sms/sms-master',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => 'To=' . $to . '&SID=' . $sId . '&ApplicationName=' . urlencode($applicationName) . '&ModuleName=' . urlencode($moduleName) . '&OtherInfo=' . urlencode($otherInfo) . '&userID=' . $userId . '&Message=' . $message . '&SmsVendor=' . $vendor,
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/x-www-form-urlencoded'
            ),
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false
        ));
        $response = curl_exec($curl);

        curl_close($curl);
        return $response;
    }
}
