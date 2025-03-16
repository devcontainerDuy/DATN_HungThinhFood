<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    /** @use HasFactory<\Database\Factories\OrderFactory> */
    use HasFactory;

    protected $fillable = [
        'uid',
        'user_id',
        'name',
        'email',
        'phone',
        'address',
        'note',
        'ship_fee',
        'sale_id',
        'total',
        'order_status',
    ];

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function sales(): BelongsTo {
        return $this->belongsTo(Sales::class, 'sale_id','id');
    }

    public function ordersHasProducts(): HasMany
    {
        return $this->hasMany(OrdersHasProducts::class, 'order_id', 'id');
    }
}
