import React, { useState } from 'react';
import axios from 'axios';
import './HotelForm.css'; 

const HotelForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [nit, setNit] = useState('');
    const [maxRooms, setMaxRooms] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/hotels', {
            name, address, city, nit, max_rooms: maxRooms
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error al agregar el hotel!', error);
        });
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Agregar Hotel</h1>
            <form onSubmit={handleSubmit} className="hotel-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre del Hotel</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Ciudad</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nit">NIT</label>
                    <input
                        type="text"
                        id="nit"
                        value={nit}
                        onChange={e => setNit(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="maxRooms">Máxima Cantidad de Habitaciones</label>
                    <input
                        type="number"
                        id="maxRooms"
                        value={maxRooms}
                        onChange={e => setMaxRooms(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Agregar Hotel</button>
            </form>
        </div>
    );
};

export default HotelForm;



