<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['name', 'group_name', 'flag_image', 'flag_emoji'];

    public function homeMatches()
    {
        return $this->hasMany(MatchGame::class, 'team1_id');
    }

    public function awayMatches()
    {
        return $this->hasMany(MatchGame::class, 'team2_id');
    }
}
