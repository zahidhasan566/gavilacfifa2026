<?php

namespace App\Traits;



use App\Services\RoleService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Return_;
use Tymon\JWTAuth\Facades\JWTAuth;

trait CommonTrait
{

    public function generateDoctorCode(){
        $doctorCode= 'DOC' . date('Ymd') . str_pad(DB::table('Doctors')->count() + 1, 3, '0', STR_PAD_LEFT);
        // Format: AGT2024-0001
        return $doctorCode;
    }

}
