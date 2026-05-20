<?php

namespace App\Http\Controllers\JobCard;

use App\Http\Controllers\Controller;
use App\Models\JobCard\ViewtblJobCard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JobCardController extends Controller
{
    public function sendSms($jobCardNo)
    {
        $jobCardNo = base64_decode($jobCardNo);

    }

    public function existingJobCard($jobCardNo)
    {
        try {

            if (!preg_match('/^HC/i', $jobCardNo)) {
                //$this->sendFlagshipJobCardMsg($jobCardNo);
                $userId = "HC0053";
//                $sql = "exec usp_doLoadJobCardDetils '$jobCardNo'";
                $sql = "exec usp_loadExistingJobCardInfo '$userId','$jobCardNo'";
                $existingJobCard = $this->getThreesPdoResult($sql);

            } else {
                $user = ViewtblJobCard::select('ServiceCenterCode')->lock('WITH(NOLOCK)')->where('JobCardNo', $jobCardNo)->first();
                $userId = $user->ServiceCenterCode;
                $sql = "exec usp_loadExistingJobCardInfo '$userId','$jobCardNo' ";
                $existingJobCard = $this->getPdoResult($sql);
            }
            $existingJobCardInfo = $existingJobCard ? $existingJobCard[0] : [];
            $existingJobCardPartsInfo = $existingJobCard ? $existingJobCard[1] : [];
            $existingJobCardServiceInfo = $existingJobCard ? $existingJobCard[2] : [];

            //Img exist or not
            $signatureBefore = '';
            $signatureAfter = '';
            $signatureSupervisor = '';
            if (!empty($existingJobCardInfo[0]['SignatureBefore'])) {
                $context = stream_context_create([
                    "ssl" => [
                        "verify_peer" => false,
                        "verify_peer_name" => false,
                    ]
                ]);
                $signatureBefore = get_headers("http://app.acibd.com/apps/dms_signature/public/uploads/" . $existingJobCardInfo[0]['SignatureBefore'], 1, $context);
                if ($signatureBefore[0] == 'HTTP/1.1 200 OK') {
                    $signatureBefore = "https://app.acibd.com/apps/dms_signature/public/uploads/" . $existingJobCardInfo[0]['SignatureBefore'];
                } else {
                    $signatureBefore = "https://dms-signature.s3.ap-southeast-1.amazonaws.com/public/uploads/" . $existingJobCardInfo[0]['SignatureBefore'];
                }

                $signatureAfter = get_headers("http://app.acibd.com/apps/dms_signature/public/uploads/" . $existingJobCardInfo[0]['SignatureAfter'], 1, $context);
                if ($signatureAfter[0] == 'HTTP/1.1 200 OK') {
                    $signatureAfter = "https://app.acibd.com/apps/dms_signature/public/uploads/" . $existingJobCardInfo[0]['SignatureAfter'];
                } else {
                    $signatureAfter = "https://dms-signature.s3.ap-southeast-1.amazonaws.com/public/uploads/" . $existingJobCardInfo[0]['SignatureAfter'];
                }

                $signatureSupervisor = get_headers("http://app.acibd.com/apps/dms_signature/public/uploads/" . $existingJobCardInfo[0]['SignatureSupervisor'], 1, $context);
                if ($signatureSupervisor[0] == 'HTTP/1.1 200 OK') {
                    $signatureSupervisor = "https://app.acibd.com/apps/dms_signature/public/uploads/" . $existingJobCardInfo[0]['SignatureSupervisor'];
                } else {
                    $signatureSupervisor = "https://dms-signature.s3.ap-southeast-1.amazonaws.com/public/uploads/" . $existingJobCardInfo[0]['SignatureSupervisor'];
                }

            }
            $ydtFile = '';
            if (!empty($existingJobCardInfo[0]['YTD_File'])) {
//                $ydtFile = get_headers("https://ydms.yamahabd.com/public/uploads/JobCardYdt/" . $existingJobCardInfo[0]['YTD_File'], 1, $context);
                $ydtFile = "https://ydms.yamahabd.com/public/uploads/JobCardYdt/" . $existingJobCardInfo[0]['YTD_File'];

                if ($this->isValidFile($ydtFile)) {
                    $ydtFile = "https://ydms.yamahabd.com/public/uploads/JobCardYdt/" . $existingJobCardInfo[0]['YTD_File'];
                } else {
                    $ydtFile = "https://yamaha-dms.s3.ap-southeast-1.amazonaws.com/ytd-file/" . $existingJobCardInfo[0]['YTD_File'];
                }
            }
            return response()->json([
                'existingJobCard' => $existingJobCardInfo,
                'existingJobCardPartsInfo' => $existingJobCardPartsInfo,
                'existingJobCardServiceInfo' => $existingJobCardServiceInfo,
                'signatureBefore' => $signatureBefore,
                'signatureAfter' => $signatureAfter,
                'signatureSupervisor' => $signatureSupervisor,
                'ydtFile' => $ydtFile,
            ]);

//            $result = DB::connection('sqlsrvread')->select("EXEC usp_LoadProduct '$business','$productCode','0','$userId'");


        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something went wrong!' . $exception->getMessage() . '-' . $exception->getLine()
            ], 500);
        }

    }
    function isValidFile($url) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_NOBODY, true); // HEAD request
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        curl_exec($ch);

        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
        $fileSize = curl_getinfo($ch, CURLINFO_CONTENT_LENGTH_DOWNLOAD);
        $err = curl_error($ch);

        curl_close($ch);

//        echo "URL: $url\n";
//        echo "HTTP Code: $httpCode\n";
//        echo "Content-Type: $contentType\n";
//        echo "File Size: $fileSize\n";
//        echo "cURL Error: $err\n\n";

        // Debugging result
        if ($httpCode == 200 && $fileSize > 0) {
            return true;
        }
        return false;
    }


    public function getPdoResult($sql)
    {
        $conn = DB::connection('sqlsrv');
        $pdo = $conn->getPdo()->prepare($sql);
        $pdo->execute();
        $res = array();
        do {
            $rows = $pdo->fetchAll(\PDO::FETCH_ASSOC);
            $res[] = $rows;
        } while ($pdo->nextRowset());
        return $res;
    }

    public function getThreesPdoResult($sql)
    {
        $conn = DB::connection('sqlsrvthrees');
        $pdo = $conn->getPdo()->prepare($sql);
        $pdo->execute();
        $res = array();
        do {
            $rows = $pdo->fetchAll(\PDO::FETCH_ASSOC);
            $res[] = $rows;
        } while ($pdo->nextRowset());
        return $res;
    }

    public function sendFlagshipJobCardMsg($jobCardNo)
    {
        $result = DB::connection('sqlsrvthrees')
            ->select(" SELECT top 1 T.*,T.YtdFile as YTD_File, J.JobTypeName, 'Yamaha 3S Center' DealerName, t.TimeRequired FROM tblJobCard T LEFT JOIN tblJobType J ON T.JobTypeId = J.id WHERE JobCardNo = '$jobCardNo'");
        dd($result);
    }

}
