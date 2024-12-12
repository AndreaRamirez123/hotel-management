import React, { useState } from 'react';
import axios from 'axios';

const AccommodationForm = ({ match }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const hotelId = match.params.hotelId; // Obtener hotelId desde los parámetros de la URL
    axios
      .post(`http://localhost:8000/api/hotels/${hotelId}/accommodations`, {
        name,
        type,
        quantity,
      })
      .then((response) => {
        console.log('Acomodación registrada:', response.data);
      })
      .catch((error) => {
        console.error('Error al registrar acomodación:', error);
      });
  };

  return (
    <div className="form-container">
      <h1>Registrar Acomodación</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre Acomodación</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tipo Acomodación</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Cantidad de Acomodaciones</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar Acomodación</button>
      </form>
    </div>
  );
};

export default AccommodationForm;

