<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $fillable = [
        'name', 'unique_code', 'chamber_address', 'mobile',
        'email', 'profile_picture', 'password', 'role', 'status', 'raffle_opted_in',
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = ['status' => 'integer', 'raffle_opted_in' => 'boolean'];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return ['role' => $this->role];
    }

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function predictions()
    {
        return $this->hasMany(Prediction::class);
    }

    public function totalPoints()
    {
        return $this->predictions()->sum('points_earned');
    }

    public function getProfilePictureUrlAttribute()
    {
        if ($this->profile_picture) {
            return asset('images/' . $this->profile_picture);
        }
        return asset('images/default-avatar.png');
    }
}
