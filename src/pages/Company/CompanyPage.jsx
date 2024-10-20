import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import FormPostJob from '../../components/formJob/FormPostJob';
import { getMyPostCompany, getApplicantsForJob } from '../../service/UrlConfig.js';
import { useNavigate } from 'react-router-dom'; // Hook para la navegación

const CompanyPage = () => {
    const [jobs, setJobs] = useState([]);
    const [applicants, setApplicants] = useState({}); // Estado para almacenar aplicantes por trabajo
    const [visibleApplicants, setVisibleApplicants] = useState({}); // Estado para controlar la visibilidad de los aplicantes
    const navigate = useNavigate(); // Para redirigir al usuario

    // Función para obtener los trabajos
    const fetchJobs = async () => {
        try {
            const jobsList = await getMyPostCompany();  // Llama a la API
            console.log(jobsList);               // Muestra los datos en la consola para depurar
            setJobs(jobsList.data.postYComentario || []); // Asegúrate de que jobsList sea un arreglo
        } catch (error) {
            console.error('Error fetching jobs:', error);  // Maneja cualquier error que ocurra
        }
    };

    // Función para obtener los aplicantes por cada trabajo
    const fetchApplicants = async (jobId) => {
        try {
            const response = await getApplicantsForJob(jobId);
            setApplicants(prevState => ({
                ...prevState,
                [jobId]: response.data.applicants || [] // Almacena los aplicantes de este trabajo
            }));
        } catch (error) {
            console.error('Error fetching applicants:', error);
        }
    };

    // Maneja la visibilidad de los aplicantes
    const toggleApplicantsVisibility = (jobId) => {
        setVisibleApplicants(prevState => ({
            ...prevState,
            [jobId]: !prevState[jobId] // Alterna la visibilidad
        }));

        // Si no se han cargado los aplicantes aún, cargarlos
        if (!applicants[jobId]) {
            fetchApplicants(jobId);
        }
    };

    useEffect(() => {
        fetchJobs(); // Llama a la función cuando el componente se monte
    }, []);

    // Función para manejar cuando un nuevo trabajo es publicado
    const handleJobPosted = () => {
        fetchJobs(); // Actualiza la lista de trabajos
    };

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('token');  // Elimina el token del localStorage
        navigate('/');  // Redirige al usuario a la página de inicio (o cualquier otra ruta)
    };

    return (
        <>
            <Navbar showButtons={false} />
            <section>
                {/* Encabezado con imagen de fondo */}
                <div className="relative w-full h-[15rem] md:h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV1bmklQzMlQjNufGVufDB8fDB8fHww"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-16 md:pt-28 text-center px-4">
                        <h2 className="block antialiased font-sans font-semibold text-white mb-2 md:mb-4 text-2xl md:text-4xl lg:text-5xl">
                            ¡PUBLICA UN NUEVO TRABAJO DISPONIBLE!
                        </h2>
                        <p className="block font-sans text-lg md:text-xl text-white mb-6 md:mb-9 opacity-80">
                            Encuentra los mejores talentos para tu empresa.
                        </p>
                        {/* Botón de Cerrar Sesión */}
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-gray-800 text-white rounded-full mt-4 hover:bg-blue-700 transition-all text-sm font-medium">
                            Cerrar sesión
                        </button>
                    </div>
                </div>

                {/* Formulario para postear trabajos */}
                <div className="w-full flex justify-center py-8 px-4 md:px-0">
                    <div className="w-full max-w-xl md:max-w-3xl bg-white rounded-lg shadow-lg p-4 md:p-6">
                        <FormPostJob onJobPosted={handleJobPosted} />
                    </div>
                </div>

                {/* Lista de trabajos publicados */}
                <div className="w-full flex justify-center py-8 bg-gray-100 px-4 md:px-0">
                    <div className="w-full max-w-xl md:max-w-3xl">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">Trabajos que has publicado</h3>
                        <div className="grid gap-4 md:gap-6">
                            {Array.isArray(jobs) && jobs.length > 0 ? (
                                jobs.map((job, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                                        <h4 className="text-lg md:text-xl font-semibold text-gray-800">{job.post}</h4>
                                        <p className="text-gray-600 mb-2">{job.content}</p>
                                        <p className="text-gray-500">Categoría: {job.category}</p>
                                        <p className="text-gray-500 mb-4">Ubicación: {job.location}</p>

                                        {/* Botón para cargar aplicantes */}
                                        <button
                                            onClick={() => toggleApplicantsVisibility(job._id)}
                                            className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-blue-700 transition-all"
                                        >
                                            {visibleApplicants[job._id] ? 'Ocultar Aplicantes' : 'Ver Aplicantes'}
                                        </button>

                                        {visibleApplicants[job._id] && applicants[job._id] && applicants[job._id].length > 0 && (
                                            <div className="bg-gray-50 p-2 md:p-4 rounded-lg mt-4">
                                                <h5 className="font-bold text-gray-700 mb-2">Aplicantes:</h5>
                                                {applicants[job._id].map((applicant, aIndex) => (
                                                    <div key={aIndex} className="text-gray-600 mb-2">
                                                        <p>
                                                            Nombre: <strong>{applicant.username}</strong><br />
                                                            Correo: <strong>{applicant.email}</strong>
                                                        </p>
                                                        {/* Botón para descargar el CV */}
                                                        {applicant.cvUrl && (
                                                            <a
                                                                href={applicant.cvUrl} // La URL proporcionada por el backend
                                                                target="_blank" // Abre el archivo en una nueva pestaña
                                                                rel="noopener noreferrer" // Seguridad adicional para enlaces externos
                                                                className="mt-2 inline-block px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-blue-700 transition-all"
                                                            >
                                                                Descargar CV
                                                            </a>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                    </div>
                                ))
                            ) : (
                                <p className="text-center">No hay trabajos disponibles</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-4 text-center text-sm md:text-base">
                <p>Copyright © 2024 - Todos los derechos reservados por Chamba</p>
            </footer>
        </>
    );
};

export default CompanyPage;







