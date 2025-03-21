// Importa la librería axios para realizar solicitudes HTTP
const axios = require('axios');
// Se define la URL base para la API de usuarios
const API_URL = 'https://api-usuarios-perfiles.onrender.com/apiV1/users';

// Función para crear un nuevo usuario
const createUser = async () => {
  try {
    // Datos del nuevo usuario
    const nuevoUsuario = {
      nombre: 'Karla Rubio',
      correo: 'krubio@example.com',
      edad: 25,
      esAdministrador: false,
      intereses: ['Programación', 'IA', 'Seguridad Informática'],
      direccion: {
        calle: 'Av. México 123',
        ciudad: 'Tepic',
        pais: 'México'
      },
      actividad: []
    };

    // Realiza la solicitud POST para crear el nuevo usuario a la API
    const response = await axios.post(API_URL, nuevoUsuario);
    // Si la solicitud fue exitosa, muestra el usuario creado en la consola
    console.log('Usuario creado:', response.data);
  } catch (error) {
    // Si la solicitud falló, muestra el mensaje de error en la consola
    console.error('Error al crear usuario:', error.response?.data || error.message);
  }
};

// Llama a la función para crear un nuevo usuario
createUser();
