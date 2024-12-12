<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HotelController; // Importar el controlador

/*
|---------------------------------------------------------------------------
| API Routes
|---------------------------------------------------------------------------
|
|
|
*/

// Rutas para Hoteles (RESTful)
Route::get('/hotels', [HotelController::class, 'getHotels']);
Route::post('/hotels', [HotelController::class, 'createHotel']);



