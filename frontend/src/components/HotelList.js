
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cargar hoteles desde la API
    api.get('/hotels')
      .then((response) => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los hoteles:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando hoteles...</p>;

  return (
    <div>
      <h1>Lista de Hoteles</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.address}, {hotel.city}</p>
            <p><strong>NIT:</strong> {hotel.nit}</p>
            <p><strong>Máximo de habitaciones:</strong> {hotel.max_rooms}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;

