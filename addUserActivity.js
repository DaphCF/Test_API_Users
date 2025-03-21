// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para agregar una actividad a un usuario
const addUserActivity = async (id) => {
  try {
    // Datos de la actividad a agregar
    const actividad = { accion: 'Inició sesión' };
    // Realiza la solicitud POST para agregar la actividad al usuario con el ID especificado
    const response = await axios.post(`${API_URL}/${id}/activity`, actividad);
    // Si la solicitud fue exitosa, muestra la actividad agregada al usuario en la consola
    console.log('Actividad agregada:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el mensaje de error en la consola
    console.error('Error al agregar actividad:', error.response?.data || error.message);
  }
};

// Llama a la función con el ID del usuario al que se le agregará la actividad
addUserActivity('d7XnaJh7djMs7CHhuXvs');
