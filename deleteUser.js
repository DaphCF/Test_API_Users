// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

const deleteUser = async (id) => {
  try {
    // Realiza la solicitud DELETE para eliminar un usuario con el ID especificado
    const response = await axios.delete(`${API_URL}/${id}`);
    // Si la solicitud fue exitosa, muestra el usuario eliminado en la consola
    console.log('Usuario eliminado:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el mensaje de error en la consola
    console.error('Error al eliminar usuario:', error.response?.data || error.message);
  }
};

// Llama a la función con el ID del usuario a eliminar
deleteUser('XB8agk8gj7EZbaMZ2xA7');
