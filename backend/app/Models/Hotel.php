<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Hotel extends Model
{
    use HasFactory;

    // Definir los campos que pueden ser asignados masivamente
    protected $fillable = ['name', 'address', 'city', 'nit', 'max_rooms'];

    public function accommodations(): HasMany
    {
        return $this->hasMany(Accommodation::class, 'hotel_id');
    }
}


