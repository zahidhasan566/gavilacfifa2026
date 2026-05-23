<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'             => 'required|string|max:255',
            'unique_code'      => 'required|string|unique:users,unique_code',
            'chamber_address'  => 'nullable|string',
            'mobile'           => 'required|string|max:20',
            'email'            => 'required|email|unique:users,email',
            'profile_picture'  => 'nullable|image|max:2048',
            'password'         => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $picturePath = null;
        if ($request->hasFile('profile_picture')) {
            $file     = $request->file('profile_picture');
            $filename = uniqid('prof_', true) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('images/profiles'), $filename);
            $picturePath = 'profiles/' . $filename;
        }

        $user = User::create([
            'name'            => $request->name,
            'unique_code'     => $request->unique_code,
            'chamber_address' => $request->chamber_address,
            'mobile'          => $request->mobile,
            'email'           => $request->email,
            'profile_picture' => $picturePath,
            'password'        => Hash::make($request->password),
            'role'            => 'user',
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'status'       => 'success',
            'message'      => 'Account created successfully.',
            'access_token' => $token,
            'token_type'   => 'bearer',
            'user'         => $this->userResource($user),
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'unique_code' => 'required|string',
            'password'    => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }

        $user = User::where('unique_code', $request->unique_code)
                    ->where('status', 1)
                    ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['status' => 'error', 'message' => 'Invalid credentials.'], 401);
        }

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'status'       => 'success',
            'access_token' => $token,
            'token_type'   => 'bearer',
            'user'         => $this->userResource($user),
            'expires_in'   => config('jwt.ttl') * 60,
        ]);
    }

    public function me(Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();
        return response()->json(['status' => 'success', 'user' => $this->userResource($user)]);
    }

    public function logout()
    {
        try {
            JWTAuth::parseToken()->invalidate();
        } catch (\Exception $e) {
        }
        return response()->json(['status' => 'success', 'message' => 'Logged out successfully.']);
    }

    public function refresh()
    {
        $token = JWTAuth::refresh(JWTAuth::getToken());
        return response()->json(['status' => 'success', 'access_token' => $token]);
    }

    public function updateProfile(Request $request)
    {
        $user = JWTAuth::user();
        $validator = Validator::make($request->all(), [
            'profile_picture' => 'required|image|max:2048',
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()], 422);
        }
        if ($user->profile_picture) {
            $old = public_path('images/' . $user->profile_picture);
            if (file_exists($old)) @unlink($old);
        }
        $file     = $request->file('profile_picture');
        $filename = uniqid('prof_', true) . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('images/profiles'), $filename);
        $user->profile_picture = 'profiles/' . $filename;
        $user->save();
        return response()->json(['status' => 'success', 'user' => $this->userResource($user)]);
    }

    private function userResource(User $user): array
    {
        return [
            'id'               => $user->id,
            'name'             => $user->name,
            'unique_code'      => $user->unique_code,
            'chamber_address'  => $user->chamber_address,
            'mobile'           => $user->mobile,
            'email'            => $user->email,
            'role'             => $user->role,
            'profile_picture_url' => $user->profile_picture_url,
            'total_points'     => $user->totalPoints(),
        ];
    }
}
