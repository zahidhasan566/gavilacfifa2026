<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Roles extends Model
{
    use HasFactory;
    protected $table = "Roles";
    public $primaryKey = 'RoleId';
    protected $guarded = [];
    public $timestamps = false;

    public function users()
    {
        return $this->hasMany(User::class, 'RoleId', 'RoleId');
    }
}
