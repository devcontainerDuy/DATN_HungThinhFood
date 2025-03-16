<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Core extends Model
{
    /** @use HasFactory<\Database\Factories\CoreFactory> */
    use HasFactory;

    protected $fillable = [
        'pie_filling',
    ];

    public function variant(): HasMany
    {
        return $this->hasMany(Variant::class, 'core_id', 'id');
    }
}
