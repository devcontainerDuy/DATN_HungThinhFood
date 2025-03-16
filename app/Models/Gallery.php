<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gallery extends Model
{
    /** @use HasFactory<\Database\Factories\GalleryFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'image_path',
        'id_parent',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    protected $dates = ['deleted_at'];

    public function variant(): BelongsTo
    {
        return $this->belongsTo(Variant::class, 'id_parent', 'id');
    }
}
