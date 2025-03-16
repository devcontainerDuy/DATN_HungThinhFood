<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Categories extends Model
{
    /** @use HasFactory<\Database\Factories\CategoriesFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'position',
        'status',
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    public function product(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'categories_has_products', 'category_id', 'product_id');
    }
}
