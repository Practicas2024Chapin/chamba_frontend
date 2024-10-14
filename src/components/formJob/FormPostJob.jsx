import React, { useState } from 'react';
// import { createPost } from '../../service/UrlConfig'; // Asegúrate de que la ruta sea correcta
import { createPost } from "../../service/UrlConfig.js";
import { toast } from 'react-hot-toast';

const PostForm = ({ onJobPosted }) => { // Añadimos la prop onJobPosted
    const [company, setCompany] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validar que todos los campos estén llenos
        if (!company || !content || !category || !location) {
            return toast.error('Por favor, completa todos los campos.');
        }
    
        try {
            const postData = {
                company,
                content,
                category,
                location
            };
    
            // Crear la publicación
            const newPost = await createPost(postData);
    
            // Verificar si hay un error en la respuesta
            if (newPost.error) {
                return toast.error('Error al realizar la publicación. Inténtalo de nuevo.');
            }
    
            // Si la publicación fue exitosa
            toast.success('Tu publicación se ha realizado con éxito.');
            
            // Limpiar los campos del formulario
            setCompany('');
            setContent('');
            setCategory('');
            setLocation('');
    
            // Llama a la función para actualizar la lista de trabajos
            if (onJobPosted) {
                onJobPosted(); // Llamada a la prop que refresca la lista de trabajos
            }
        } catch (error) {
            toast.error('Hubo un error al intentar realizar la publicación.');
        }
    };
    

    return (
        <>
            <div className="bg-white max-w-xs mx-auto p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                {/* Espacio para la imagen */}
                <div className="w-full h-36 mb-4 rounded-t-lg overflow-hidden">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhn6biFlhgIdBfnX0IsTGOxToyOXr98SQEg&s"
                        alt="Job Offer"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Mapeo de estado */}
                <h1 className="text-xl font-bold mb-4 text-center text-gray-800">Oferta laboral</h1>

                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Empresa"
                    className="w-full mb-3 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Contenido"
                    className="w-full mb-3 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Categoría"
                    className="w-full mb-4 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ubicación"
                    className="w-full mb-4 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <button
                    onClick={handleSubmit}
                    className="w-full px-4 py-1.5 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 transition-all"
                >
                    Publicar
                </button>

                {successMessage && (
                    <p className="mt-4 text-blue-600 text-center">{successMessage}</p>
                )}
            </div>
        </>
    );
};

export default PostForm;


