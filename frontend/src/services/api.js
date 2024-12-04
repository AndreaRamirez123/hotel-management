
import axios from 'axios';

// Configura la URL base de tu API (ajusta el dominio según tu entorno)
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Cambia esto por la URL de tu backend
});

export default api;

