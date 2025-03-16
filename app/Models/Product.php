<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'image_path',
        'views',
        'status',
        'brand_id',
        'variants_id',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function brand(): HasMany
    {
        return $this->hasMany(Brand::class, 'brand_id', 'id');
    }

    public function variant(): HasMany
    {
        return $this->hasMany(Variant::class, 'product_id', 'id');
    }

    public function category(): BelongsToMany {
        return $this->belongsToMany(Categories::class, 'categories_has_products', 'product_id', 'category_id');
    }
}
