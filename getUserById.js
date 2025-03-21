// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para obtener un usuario por ID
const getUserById = async (id) => {
  try {
    // Realiza la solicitud GET a la API para obtener el usuario con el ID especificado
    const response = await axios.get(`${API_URL}/${id}`);
    // Si la solicitud fue exitosa, muestra el usuario obtenido en la consola
    console.log('Usuario encontrado:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el error en la consola
    console.error('Error al obtener usuario:', error.response?.data || error.message);
  }
};

// Llama a la función con un ID de usuario específico
getUserById('d7XnaJh7djMs7CHhuXvs');
