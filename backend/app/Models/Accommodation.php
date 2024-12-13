<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Accommodation extends Model
{
    protected $fillable = ['hotel_id', 'room_type_id', 'accommodation_id', 'number_rooms'];

    public function roomType(): BelongsTo
    {
        return $this->belongsTo(RoomType::class, 'room_type_id');
    }

    public function accommodationType(): BelongsTo
    {
        return $this->belongsTo(AccommodationType::class, 'accommodation_id');
    }
}
