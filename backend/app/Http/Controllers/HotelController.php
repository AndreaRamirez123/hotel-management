<?php


namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Hotel;

class HotelController extends Controller
{
    // Obtener todos los hoteles
    public function getHotels() {
        $hotels = Hotel::all(); // Obtiene todos los hoteles
        return response()->json($hotels); // Devuelve la respuesta en formato JSON
    }

    // Obtener información del hotel por su id
    public function getHotelById(String $id) {
        $hotel = Hotel::where(["id" => $id])->with('accommodations', function($q) {
            $q->with('roomType');
            $q->with('accommodationType');
        })->first(); // Obtiene el hotel por el id indicado
        return response()->json(["hotel_info" => $hotel, "id" => $id]); // Devuelve la respuesta en formato JSON
    }

    // Crear un nuevo hotel
    public function createHotel(Request $request) {
        // Validar los datos (opcional)
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'nit' => 'required|string|max:255',
            'max_rooms' => 'required|integer',
        ]);

        // Crear un nuevo hotel
        $hotel = Hotel::create([
            'name' => $validated['name'],
            'address' => $validated['address'],
            'city' => $validated['city'],
            'nit' => $validated['nit'],
            'max_rooms' => $validated['max_rooms'],
        ]);

        // Respuesta de éxito
        return response()->json([
            "status" => 200,
            "message" => "Hotel creado con éxito",
            "hotel" => $hotel
        ]);
    }

    // Guardar acomodación del hotel
    public function saveAccommodation(Request $request) {
        return response()->json([
            "status" => 200,
            "message" => "Respuesta desde el servicio expuesto en backend",
            "hotel" => $request->all()
        ]);
    }
}


