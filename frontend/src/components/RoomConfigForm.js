import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';  // Importa useParams para obtener el ID del hotel

const RoomConfigForm = () => {
  const { hotelId } = useParams();  // Obtén el ID del hotel de la URL
  const [hotelData, setHotelData] = useState({});
  const [rooms, setRooms] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels/${hotelId}`)
      .then((response) => {
        setHotelData(response.data);
        setRooms(response.data.max_rooms);  // Establece el valor inicial para las habitaciones
      })
      .catch((error) => {
        console.error('Error al cargar los datos del hotel:', error);
      });
  }, [hotelId]);

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarás el envío de la configuración de habitaciones
    console.log('Configuración de habitaciones:', rooms);
    // Podrías enviar estos datos al backend para actualizar la configuración de las habitaciones
  };

  return (
    <div className="room-config">
      <h1>Configuración de Habitaciones {hotelData.name}</h1>
      <form onSubmit={handleRoomSubmit}>
        <div className="form-group">
          <label>Cantidad de Habitaciones:</label>
          <input
            type="number"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Guardar Configuración</button>
      </form>
    </div>
  );
};

export default RoomConfigForm;
