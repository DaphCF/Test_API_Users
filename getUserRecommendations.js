// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para obtener las recomendaciones de contactos para un usuario
const getUserRecommendations = async (id) => {
  try {
    // Realiza la solicitud GET para obtener las recomendaciones del usuario con el ID especificado
    const response = await axios.get(`${API_URL}/recommend/${id}`);
    // Si la solicitud fue exitosa, muestra las recomendaciones de contacto en la consola
    console.log('Recomendaciones de contactos:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el mensaje de error en la consola
    console.error('Error al obtener recomendaciones:', error.response?.data || error.message);
  }
};

// Llama a la función con un ID de usuario específico
getUserRecommendations('d7XnaJh7djMs7CHhuXvs');
