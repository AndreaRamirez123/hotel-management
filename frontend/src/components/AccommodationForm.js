import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AccommodationForm = () => {
  const { hotelId } = useParams(); // Obtener el hotel ID desde la URL
  const [accommodations, setAccommodations] = useState([]);
  const [roomType, setRoomType] = useState('');
  const [accommodationType, setAccommodationType] = useState('');
  const [error, setError] = useState('');

  // Cargar acomodaciones al montar el componente
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels/${hotelId}/accommodations`)
      .then((response) => {
        setAccommodations(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar las acomodaciones:', error);
      });
  }, [hotelId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validar que la combinación no exista
    const exists = accommodations.some(
      (acc) =>
        acc.room_type === roomType && acc.accommodation_type === accommodationType
    );

    if (exists) {
      setError('Esta combinación ya existe para este hotel.');
      return;
    }

    // Registrar la acomodación
    axios
      .post(`http://localhost:8000/api/hotels/${hotelId}/accommodations`, {
        room_type: roomType,
        accommodation_type: accommodationType,
      })
      .then((response) => {
        setAccommodations([...accommodations, response.data]);
        setRoomType('');
        setAccommodationType('');
      })
      .catch((error) => {
        console.error('Error al registrar la acomodación:', error);
        setError('Error al registrar la acomodación.');
      });
  };

  return (
    <div className="accommodation-form-container">
      {/* Cargar el CSS desde public */}
      <link rel="stylesheet" href="/AccommodationForm.css" />
      <h1>Registrar Acomodación</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="accommodation-form">
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
        <button type="submit">Registrar Acomodación</button>
      </form>
      <h2>Acomodaciones registradas</h2>
      {accommodations.length === 0 ? (
        <p>No hay acomodaciones registradas.</p>
      ) : (
        <ul className="accommodation-list">
          {accommodations.map((acc, index) => (
            <li key={index}>
              <p>🛏️ Tipo de habitación: {acc.room_type}</p>
              <p>🏠 Tipo de acomodación: {acc.accommodation_type}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AccommodationForm;

