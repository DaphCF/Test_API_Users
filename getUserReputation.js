// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para obtener la reputación de un usuario
const getUserReputation = async (id) => {
  try {
    // Realiza la petición GET para obtener la reputación del usuario con el ID especificado
    const response = await axios.get(`${API_URL}/reputation/${id}`);
    // Si la solicitud fue exitosa, muestra la reputación del usuario en la consola
    console.log('Reputación del usuario:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el mensaje de error en la consola
    console.error('Error al obtener reputación:', error.response?.data || error.message);
  }
};

// Llama a la función con un ID de usuario específico
getUserReputation('d7XnaJh7djMs7CHhuXvs');
