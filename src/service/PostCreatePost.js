/*import axios from 'axios';

// Función para crear un nuevo post
export const createPost = async (postData, token) => {
    // Agregar el token como parámetro de consulta en la URL
    const URL = `http://127.0.0.1:3000/practica/v1/post/post?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NmY2ZDNmM2I4ODAyNDUxODljNjFmOGYiLCJlbWFpbCI6Im1hcmlvQGNvbXBhbnkub3JnLmd0IiwiaWF0IjoxNzI3NDUyNTgyLCJleHAiOjE3Mjc0ODEzODJ9.1bqhH9_LVb6rBa5o_MtnQ73uGioDdUOmbie9MLNohJs`; // Ruta del backend

    try {
        const res = await axios.post(URL, postData, {
            headers: {
                'Content-Type': 'application/json' // Especifica el tipo de contenido
            }
        });

        if (res.status === 201) {
            console.log('Post creado exitosamente:', res.data.data); // Agrega este log
            return res.data.data; // Devuelve el nuevo post creado
        } else {
            return null; // Devuelve null si no se creó el post
        }
    } catch (e) {
        console.log('Error al crear el post:', e); // Muestra el error en consola
        return null; // Devuelve null en caso de error
    }
};*/
