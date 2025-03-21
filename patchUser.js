// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para actualizar un usuario parcialmente
const patchUser = async (id) => {
  try {
    // Datos para la actualización parcial del usuario
    const datosActualizados = {
      edad: 26,
      intereses: ['Programación', 'IA', 'Seguridad Informática', 'Desarrollo Web']
    };
    // Realiza la solicitud PATCH para actualizar los datos del usuario con el ID especificado
    const response = await axios.patch(`${API_URL}/${id}`, datosActualizados);
    // Si la solicitud fue exitosa, muestra el usuario actualizado parcialmente en la consola
    console.log('Usuario actualizado parcialmente:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el mensaje de error en la consola
    console.error('Error al actualizar datos del usuario:', error.response?.data || error.message);
  }
};

// Llama a la función con el ID del usuario a actualizar parcialmente
patchUser('d7XnaJh7djMs7CHhuXvs');
