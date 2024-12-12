<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
{
    Schema::create('rooms', function (Blueprint $table) {
        $table->id();
        $table->foreignId('hotel_id')->constrained()->onDelete('cascade');
        $table->foreignId('room_type_id')->constrained()->onDelete('cascade');
        $table->foreignId('accommodation_id')->constrained()->onDelete('cascade');
        $table->integer('quantity');
        $table->timestamps();
    });
}

    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
