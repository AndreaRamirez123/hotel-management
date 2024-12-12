import React, { useState } from 'react';
import axios from 'axios';

const HotelForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [nit, setNit] = useState('');
  const [maxRooms, setMaxRooms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/hotels', {
        name,
        address,
        city,
        nit,
        max_rooms: maxRooms,
      })
      .then((response) => {
        console.log(response.data);
        // Redirigir o realizar acción luego del envío exitoso
      })
      .catch((error) => {
        console.error('Error al agregar el hotel!', error);
      });
  };

  return (
    <div className="form-container">
      <h1>Registrar Hotel</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Dirección</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Ciudad</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>NIT</label>
          <input
            type="text"
            value={nit}
            onChange={(e) => setNit(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Máxima cantidad de habitaciones</label>
          <input
            type="number"
            value={maxRooms}
            onChange={(e) => setMaxRooms(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar Hotel</button>
      </form>
    </div>
  );
};

export default HotelForm;
