// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para obtener todos los usuarios
const getUsers = async () => {
  try {
    // Realiza la solicitud GET para obtener todos los usuarios desde la API
    const response = await axios.get(API_URL);
    // Si la solicitud fue exitosa, muestra los usuarios obtenidos en la consola
    console.log('Usuarios:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el error en la consola
    console.error('Error al obtener usuarios:', error.response?.data || error.message);
  }
};

// Llama a la función para obtener los usuarios
getUsers();
