// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para actualizar los datos de un usuario existente
const updateUser = async (id) => {
  try {
    // Datos actualizados del usuario
    const usuarioActualizado = {
      nombre: 'Javier Sánchez Mora',
      correo: 'javiSM@example.com'
    };
    // Realiza la solicitud PUT para actualizar los datos del usuario con el ID especificado
    const response = await axios.put(`${API_URL}/${id}`, usuarioActualizado);
    // Si la solicitud fue exitosa, muestra el usuario actualizado en la consola
    console.log('Usuario actualizado:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el mensaje de error en la consola
    console.error('Error al actualizar usuario:', error.response?.data || error.message);
  }
};

// Llama a la función con el ID del usuario a actualizar
updateUser('d7XnaJh7djMs7CHhuXvs');
