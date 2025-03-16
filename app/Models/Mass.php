<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Mass extends Model
{
    /** @use HasFactory<\Database\Factories\MassFactory> */
    use HasFactory;

    protected $fillable = [
        'mass_value',
    ];
    
    public function variant(): BelongsTo
    {
        return $this->belongsTo(Variant::class, 'mass_id', 'id');
    }
}
