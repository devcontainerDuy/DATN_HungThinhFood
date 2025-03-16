<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Brand extends Model
{
    /** @use HasFactory<\Database\Factories\Brand\BrandFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'image_path',
        'position',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function product(): HasMany
    {
        return $this->hasMany(Product::class, 'brand_id', 'id');
    }

}
