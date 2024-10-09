import React, { useEffect, useState } from 'react';
import { getMyPost, applyToJob } from '../../service/UrlConfig.js';
import { useNavigate } from 'react-router-dom';

function CardViewJobLog() {
    const [myPost, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null); // Para manejar el mensaje de éxito
    const navigate = useNavigate();

    const fetchJobs = async () => {
        try {
            const jobsList = await getMyPost();
            console.log(jobsList);
            if (jobsList.error) {
                throw new Error('Error al obtener los trabajos');
            }
            setJobs(jobsList.data.postYComentario || []);
        } catch (error) {
            console.error('Error fetching jobs:', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleApplyNow = async (index, idPost) => {
        if (!idPost) {
            console.error('idPost is undefined');
            setError('ID de trabajo no válido.');
            return;
        }

        console.log('Applying to job with idPost:', idPost);
        try {
            const response = await applyToJob(idPost);

            if (response.error) {
                setError('Error al aplicar al trabajo.');
                console.error(response.error.message);
                return;
            }

            if (response.success) {
                setJobs((prevPosts) => {
                    const updatedPosts = [...prevPosts];
                    updatedPosts[index].status = 'Inactivo'; // Cambia el estado del trabajo
                    return updatedPosts;
                });
                setSuccessMessage('Se ha aplicado correctamente al empleo.'); // Mensaje de éxito
                // Desaparecer el mensaje después de 3 segundos
                setTimeout(() => setSuccessMessage(null), 3000);
            } else {
                setError(response.message);
            }
        } catch (error) {
            setError('Error inesperado al aplicar al trabajo.');
            console.error('Error applying to job:', error);
        }
    };

    return (
        <div className="p-auto">
            {error && <p className="text-red-600 text-center">{error}</p>} {/* Mostrar error si existe */}
            {successMessage && (
                <div className="bg-green-200 text-green-800 p-4 rounded-lg shadow-lg mb-4">
                    {successMessage}
                </div>
            )} {/* Mostrar mensaje de éxito */}
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
                                onClick={() => handleApplyNow(index, element._id)}
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








