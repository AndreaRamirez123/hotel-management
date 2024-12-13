import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RoomConfigForm = () => {
  const { hotelId } = useParams(); // Obtén el hotelId desde la URL
  const [numRooms, setNumRooms] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/hotel-configuration/${hotelId}`, {
        numRooms,
        accommodationType,
        roomType,
      })
      .then((response) => {
        alert('Configuración guardada con éxito.');
      })
      .catch((error) => {
        alert('Error al guardar la configuración.');
      });
  };

  return (
    <div className="config-form-container">
      {/* Cargar el archivo CSS desde la carpeta public */}
      <link rel="stylesheet" href="/RoomConfigForm.css" />

      <h1>Configuración del Hotel {hotelId}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Cantidad de habitaciones</label>
          <input
            type="number"
            value={numRooms}
            onChange={(e) => setNumRooms(e.target.value)}
            placeholder="Ejemplo: 10"
            required
          />
        </div>
        <div className="form-group">
          <label>Tipo de acomodación</label>
          <select
            value={accommodationType}
            onChange={(e) => setAccommodationType(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="individual">Individual</option>
            <option value="doble">Doble</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de habitación</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="estándar">Estándar</option>
            <option value="lujo">Lujo</option>
            <option value="familiar">Familiar</option>
          </select>
        </div>
        <button type="submit">Guardar configuración</button>
      </form>
    </div>
  );
};

export default RoomConfigForm;

