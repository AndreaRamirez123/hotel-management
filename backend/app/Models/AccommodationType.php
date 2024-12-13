<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccommodationType extends Model
{
    protected $table = "accommodation_type";
   
    protected $fillable = ['name'];
}
