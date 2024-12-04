import React from 'react';
import './App.css'; // Estilos globales si tienes uno
import HotelForm from './components/HotelForm';
import HotelList from './components/HotelList';

function App() {
  return (
    <div className="App">
      <HotelForm />
      <HotelList />

    </div>
  );
}

export default App;


