<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    // Definir los campos que pueden ser asignados masivamente
    protected $fillable = ['name'];
}
