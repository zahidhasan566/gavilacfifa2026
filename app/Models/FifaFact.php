<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FifaFact extends Model
{
    protected $fillable = [
        'type', 'title', 'description', 'image',
        'link', 'sort_order', 'is_active',
    ];

    protected $casts = ['is_active' => 'boolean'];

    public function getImageUrlAttribute()
    {
        if ($this->image) {
            return asset('storage/' . $this->image);
        }
        return null;
    }
}
