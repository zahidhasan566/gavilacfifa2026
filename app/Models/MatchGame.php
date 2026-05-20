<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MatchGame extends Model
{
    protected $table = 'match_games';

    protected $fillable = [
        'group_name', 'round_number', 'team1_id', 'team2_id',
        'venue', 'match_date', 'match_time', 'status',
        'team1_score', 'team2_score',
        'team1_half1', 'team1_half2', 'team2_half1', 'team2_half2',
    ];

    protected $casts = [
        'match_date' => 'date',
    ];

    public function team1()
    {
        return $this->belongsTo(Team::class, 'team1_id');
    }

    public function team2()
    {
        return $this->belongsTo(Team::class, 'team2_id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class, 'match_id');
    }

    public function predictions()
    {
        return $this->hasMany(Prediction::class, 'match_id');
    }
}
