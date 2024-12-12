import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HotelForm from './components/HotelForm';
import HotelList from './components/HotelList'; 
import RoomConfigForm from './components/RoomConfigForm';
import AccommodationForm from './components/AccommodationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/add-hotel" element={<HotelForm />} />
        <Route path="/hotel/:hotelId/config" element={<RoomConfigForm />} />
        <Route path="/hotel/:hotelId/config" element={<AccommodationForm />} /> {/* Ruta para acomodaciones */}
      </Routes>
    </Router>
  );
}

export default App;









