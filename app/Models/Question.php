<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'match_id', 'question_text', 'type', 'points',
        'options', 'correct_answer', 'is_active', 'sort_order', 'is_template',
    ];

    protected $casts = [
        'options' => 'array',
        'is_active' => 'boolean',
        'is_template' => 'boolean',
    ];

    public function match()
    {
        return $this->belongsTo(MatchGame::class, 'match_id');
    }

    public function predictions()
    {
        return $this->hasMany(Prediction::class);
    }
}
