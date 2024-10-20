import React, { useEffect, useState } from 'react';
import { getMyPostUser, applyToJob, getUserApplications } from '../../service/UrlConfig.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // Importamos toast

function CardViewJobLog() {
    const [myPost, setJobs] = useState([]);
    const [myApplications, setApplications] = useState([]);
    const [error, setError] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState({}); // Estado para almacenar los archivos seleccionados
    const navigate = useNavigate();

    const fetchJobs = async () => {
        try {
            const jobsList = await getMyPostUser();
            if (jobsList.error) {
                throw new Error('Error al obtener los trabajos');
            }
            setJobs(jobsList.data.postYComentario || []);
        } catch (error) {
            console.error('Error fetching jobs:', error);
            toast.error('Error al obtener los trabajos.', { id: "clipboard" }); // Muestra el mensaje de error con toast
        }
    };

    const fetchApplications = async () => {
        try {
            const applicationsList = await getUserApplications();
            if (!applicationsList) {
                toast.error('Error al obtener las aplicaciones.', { id: "clipboard" });
            }
            setApplications(applicationsList.data.applications || []);
        } catch (error) {
            console.error('Error fetching applications:', error);
            toast.error('Error al obtener las aplicaciones.', { id: "clipboard" });
        }
    };

    function findApplication(idPost) {
        if (!idPost) return false; // Verificación adicional
        return myApplications.some((application) => application?.idPost?._id === idPost);
    }

    useEffect(() => {
        fetchJobs();
        fetchApplications();
    }, []);

    const handleFileChange = (index, event) => {
        const file = event.target.files[0];
        setSelectedFiles((prevFiles) => ({
            ...prevFiles,
            [index]: file, // Almacena el archivo seleccionado en el estado
        }));
    };

    const handleApplyNow = async (index, idPost) => {
        if (!idPost || !selectedFiles[index]) {
            toast.error('ID de trabajo o archivo no válido.', { id: "clipboard" });
            return;
        }
        try {
            const formData = new FormData();
            formData.append('cvFile', selectedFiles[index]); // Adjunta el archivo al formData
    
            // Agregar la URL del CV al body
            const response = await applyToJob(idPost, formData); // Asegúrate de que applyToJob esté configurado para manejar FormData
    
            if (response.error) {
                toast.error('Error al aplicar al trabajo.', { id: "clipboard" });
            } else {
                toast.success('Se ha aplicado correctamente al empleo.', { id: "clipboard" });
                fetchJobs();
                fetchApplications();
            }
        } catch (error) {
            toast.error('Error al aplicar al trabajo.', { id: "clipboard" });
        }
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
                                <p className={`text-base font-bold ${findApplication(element._id) ? 'text-red-600' : 'text-green-600'}`}>
                                    {findApplication(element._id) ? 'Inactivo' : 'Activo'}
                                </p>
                            </div>
                            
                            {/* Input para adjuntar archivo PDF */}
                            <label className="block mb-4">
                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(event) => handleFileChange(index, event)}
                                    
                                    className="hidden" // Ocultar el input de archivo
                                />
                                <span className="text-sm font-medium text-gray-500">Adjunta tu CV: </span>
                                <span className="inline-block px-4 py-1 text-sm font-medium text-white bg-gray-800 rounded-full cursor-pointer hover:bg-blue-700 transition-all">
                                    Seleccionar archivo
                                </span>
                                {selectedFiles[index] && ( // Muestra el nombre del archivo si existe
                                    <p className="mt-2 text-gray-600">{selectedFiles[index].name}</p>
                                )}
                            </label>

                            <button
                                disabled={findApplication(element._id)}
                                onClick={(event) => { event.preventDefault(); handleApplyNow(index, element._id) }}
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











