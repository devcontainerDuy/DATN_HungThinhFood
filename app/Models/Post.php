<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'image_path',
        'content',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function categorePost(): BelongsTo
    {
        return $this->belongsTo(CategorePost::class, 'category_id', 'id');
    }
}
