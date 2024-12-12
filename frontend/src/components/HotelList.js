import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/hotels')
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar los hoteles:', error);
      });
  }, []);

  return (
    <div className="hotel-list">
      <h1>Lista de Hoteles</h1>
      {hotels.length === 0 ? (
        <p>No hay hoteles registrados.</p>
      ) : (
        <ul className="hotel-list-ul">
          {hotels.map((hotel) => (
            <li key={hotel.id} className="hotel-item">
              <h3>{hotel.name}</h3>
              <p>📍 Dirección: {hotel.address}</p>
              <p>🏙️ Ciudad: {hotel.city}</p>
              <p>🆔 NIT: {hotel.nit}</p>
              <p>🛏️ Habitaciones máximas: {hotel.max_rooms}</p>

              <Link to={`/hotel/${hotel.id}/config`}>
                <button className="config-button">Configurar Habitaciones</button>
              </Link>

              <Link to={`/hotel/${hotel.id}/add-accommodation`}>
                <button className="accommodation-button">Registrar Acomodación</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelList;















