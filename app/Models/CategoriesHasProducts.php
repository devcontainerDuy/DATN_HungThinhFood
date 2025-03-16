<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CategoriesHasProducts extends Model
{
    /** @use HasFactory<\Database\Factories\CategoriesHasProductsFactory> */
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'category_id',
        'product_id',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Categories::class, 'category_id', 'id');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
}
