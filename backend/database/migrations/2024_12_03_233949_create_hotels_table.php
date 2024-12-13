<?php



use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHotelsTable extends Migration
{
    /**
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id(); // Crea un campo id auto incremental
            $table->string('name'); // Nombre del hotel
            $table->string('address'); // Dirección
            $table->string('city'); // Ciudad
            $table->string('nit'); // NIT
            $table->integer('max_rooms'); // Cantidad máxima de habitaciones
            $table->timestamps(); // Crea los campos created_at y updated_at
        });
    }

    /**
     * Deshacer la migración.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotels');
    }
}

