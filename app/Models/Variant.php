<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Variant extends Model
{
    /** @use HasFactory<\Database\Factories\VariantFactory> */
    use HasFactory;

    protected $fillable = [
        'product_id',
        'mass_id',
        'core_id',
        'price',
        'sale',
        'in_stock',
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    public function mass(): BelongsTo
    {
        return $this->belongsTo(Mass::class, 'mass_id', 'id');
    }

    public function core(): BelongsTo
    {
        return $this->belongsTo(Core::class, 'core_id', 'id');
    }

    public function evaluate(): HasMany
    {
        return $this->hasMany(Evaluate::class, 'variant_id', 'id');
    }

    public function gallery(): HasMany
    {
        return $this->hasMany(Gallery::class, 'id_parent', 'id');
    }

    public function orderHasProduct(): HasMany
    {
        return $this->hasMany(OrdersHasProducts::class, 'variant_id', 'id');
    }
}
