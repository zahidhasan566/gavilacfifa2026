<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prediction extends Model
{
    protected $fillable = [
        'user_id', 'match_id', 'question_id',
        'selected_answer', 'is_correct', 'points_earned',
    ];

    protected $casts = ['is_correct' => 'boolean'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function match()
    {
        return $this->belongsTo(MatchGame::class, 'match_id');
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
