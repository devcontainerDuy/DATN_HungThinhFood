<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CategorePost extends Model
{
    /** @use HasFactory<\Database\Factories\CategorePostFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'position',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function post() {
        return $this->hasMany(Post::class, 'category_id', 'id');
    }
}
