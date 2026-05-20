<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RaffleDraw extends Model
{
    protected $fillable = ['user_id', 'draw_date', 'notes', 'prize_points'];

    protected $casts = ['draw_date' => 'date'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
