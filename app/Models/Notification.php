<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'user_id', 'title', 'message', 'is_read', 'is_broadcast',
    ];

    protected $casts = [
        'is_read' => 'boolean',
        'is_broadcast' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
