import React, { useEffect, useState } from 'react';
// import { getMyPost } from '../../service/UrlConfig';
import { getMyPost } from '../../service/UrlConfig.js';
import { useNavigate } from 'react-router-dom';


function CardViewJobLog() {
    const [myPost, setJobs] = useState([]);
    const navigate = useNavigate(); // Hook para navegar entre rutas

    const fetchJobs = async () => {
        try {
            const jobsList = await getMyPost();  // Llama a la API
            console.log(jobsList);               // Muestra los datos en la consola para depurar
            setJobs(jobsList.data.postYComentario|| []);             // Asegúrate de que jobsList sea un arreglo
        } catch (error) {
            console.error('Error fetching jobs:', error);  // Maneja cualquier error que ocurra
        }
    };

    useEffect(() => {
        fetchJobs(); // Llama a la función cuando el componente se monte
    }, []);

    const handleApplyNow = (index) => {
        // Cambiar el estado del empleo a "Inactivo" al hacer clic
        setJobs((prevPosts) => {
            const updatedPosts = [...prevPosts];
            updatedPosts[index].status = 'Inactivo'; // Actualizar el estado
            return updatedPosts;
        });
        
        // Navegar a la ruta deseada
        navigate(''); 
    };

    return (
        <div className="p-auto">
            {myPost.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-[6rem] gap-y-[3rem] mx-[auto]">
                    {myPost.map((element, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <h2 className="text-xl font-semibold mb-2 text-gray-900">{element.post}</h2>
                            <p className="text-gray-600 mb-2">{element.content}</p>
                            <div className="mb-2">
                                <span className="text-sm font-medium text-gray-500">Categoría:</span>
                                <p className="text-base text-gray-800">{element.category}</p>
                            </div>
                            <div className="mb-2">
                                <span className="text-sm font-medium text-gray-500">Ubicación:</span>
                                <p className="text-base text-gray-800">{element.location}</p>
                            </div>
                            <div className="mb-4">
                                <span className="text-sm font-medium text-gray-500">Estado de empleo:</span>
                                <p className={`text-base font-bold ${element.status === 'Inactivo' ? 'text-red-600' : 'text-green-600'}`}>
                                    {element.status || 'Activo'}
                                </p>
                            </div>
                            <button
                                onClick={() => handleApplyNow(index)} // Pasar el índice al manejador
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-blue-700 transition-all"
                            >
                                Aplicar al empleo
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-700 text-center">No hay publicaciones de empleos disponibles.</p>
            )}
        </div>
    );
}

export default CardViewJobLog;
