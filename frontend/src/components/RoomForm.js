import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './RoomForm.css'; // Asegúrate de crear estilos o eliminar esta línea si no tienes un archivo CSS

const RoomForm = () => {
    const { hotelId } = useParams(); // Capturar el ID del hotel desde la URL
    const [roomType, setRoomType] = useState('');
    const [capacity, setCapacity] = useState('');
    const [price, setPrice] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/hotels/${hotelId}/rooms`, {
            room_type: roomType,
            capacity,
            price,
        })
        .then(() => {
            setSuccessMessage('Habitación configurada con éxito!');
            setRoomType('');
            setCapacity('');
            setPrice('');
        })
        .catch((error) => {
            console.error('Error al configurar habitación:', error);
        });
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Configurar Habitaciones para el Hotel #{hotelId}</h2>
            {successMessage && <p className="success-message">{successMessage}</p>}
            <form onSubmit={handleSubmit} className="room-form">
                <div className="form-group">
                    <label htmlFor="roomType">Tipo de Habitación</label>
                    <input
                        type="text"
                        id="roomType"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Capacidad</label>
                    <input
                        type="number"
                        id="capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Precio por Noche</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Guardar Habitación</button>
            </form>
        </div>
    );
};

export default RoomForm;

