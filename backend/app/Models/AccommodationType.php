<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccommodationType extends Model
{
    protected $table = "accommodation_type";
    // Definir los campos que pueden ser asignados masivamente
    protected $fillable = ['name'];
}
