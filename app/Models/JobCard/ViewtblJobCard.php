<?php

namespace App\Models\JobCard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewtblJobCard extends Model
{
    use HasFactory;

    protected $table = "ViewtblJobCard";
    public $timestamps = false;
    public $primaryKey = 'JobCardNo';
    protected $guarded = [];
    protected $keyType = "string";
}
