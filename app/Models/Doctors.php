<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Doctors extends Model
{
    use HasFactory;
    protected $table = "Doctors";
    public $primaryKey = 'DoctorId';
    protected $guarded = [];
    public $timestamps = false;
}
