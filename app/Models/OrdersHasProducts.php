<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrdersHasProducts extends Model
{
    /** @use HasFactory<\Database\Factories\OrdersHasProductsFactory> */
    use HasFactory;

    protected $fillable = [
        'order_id',
        'variant_id',
        'quantity',
        'unit_price',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function variant(): BelongsTo 
    {
        return $this->belongsTo(Variant::class, 'variant_id', 'id');
    }
}
