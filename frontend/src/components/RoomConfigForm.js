import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const RoomConfigForm = () => {
  const { hotelId } = useParams(); // Obtén el hotelId desde la URL
  const [numRooms, setNumRooms] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [roomType, setRoomType] = useState('');
  const [hotelInfo, setHotelInfo] = useState({}); // Estado para almacenar la información del hotel

  const getHotelInfo = async () => {
    axios
      .get(`http://localhost:8000/api/hotels/${hotelId}`)
      .then((response) => {
        // console.log('informacion recibida.', response.data);
        setHotelInfo(response.data.hotel_info);
      })
      .catch((error) => {
        console.log('Error al consultar informacion del hotel.');
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/accommodations`, {
        hotelId,
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

  useEffect(() => {
    getHotelInfo();
  }, [])

  return (
    <div className="config-form-container">
      {/* Cargar el archivo CSS desde la carpeta public */}
      <link rel="stylesheet" href="/RoomConfigForm.css" />
      <Link to='/hotels'>Volver</Link>
      <h1>Configuración de acomodaciones</h1>
      <p>
        <strong>Hotel: </strong> {hotelInfo.name}<br/>
        <strong>Ubicación: </strong> {hotelInfo.city}, {hotelInfo.address}<br/>
        <strong>Habitaciones: </strong> {hotelInfo.max_rooms}
      </p>
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

