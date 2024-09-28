import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import FormPostJob from '../../components/formJob/FormPostJob';
// import { getMyPost } from '../../service/UrlConfig';
import { getMyPost } from '../../service/UrlConfig.js';

const CompanyPage = () => {
    const [jobs, setJobs] = useState([]);

    // Función para obtener los trabajos
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

    // Función para manejar cuando un nuevo trabajo es publicado
    const handleJobPosted = () => {
        fetchJobs(); // Actualiza la lista de trabajos
    };

    return (
        <>
            <Navbar showButtons={false} />
            <section>
                {/* Encabezado con imagen de fondo */}
                <div className="relative w-full h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV1bmklQzMlQjNufGVufDB8fDB8fHww"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased font-sans font-semibold text-white mb-4 text-4xl lg:text-5xl">
                            ¡PUBLICA UN NUEVO TRABAJO DISPONIBLE!
                        </h2>
                        <p className="block font-sans text-xl text-white mb-9 opacity-80">
                            Encuentra los mejores talentos para tu empresa.
                        </p>
                    </div>
                </div>

                {/* Formulario para postear trabajos */}
                <div className="w-full flex justify-center py-8">
                    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
                        <FormPostJob onJobPosted={handleJobPosted} />
                    </div>
                </div>

                {/* Lista de trabajos publicados */}
                <div className="w-full flex justify-center py-8 bg-gray-100">
                    <div className="w-full max-w-3xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Trabajos que has publicado</h3>
                        <div className="grid gap-6">
                            {Array.isArray(jobs) && jobs.length > 0 ? (
                                jobs.map((job, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-800">{job.post}</h4>
                                        <p className="text-gray-600 mb-2">{job.content}</p>
                                        <p className="text-gray-500">Categoría: {job.category}</p>
                                        <p className="text-gray-500 mb-4">Ubicación: {job.location}</p>
                                        {job.commentOfPost && job.commentOfPost.length > 0 && (
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h5 className="font-bold text-gray-700 mb-2">Comentarios:</h5>
                                                {job.commentOfPost.map((comment, cIndex) => (
                                                    <div key={cIndex} className="text-gray-600">
                                                        <p><strong>{comment.username}:</strong> {comment.contentComment}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>No hay trabajos disponibles</p>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>Copyright © 2024 - Todos los derechos reservados por Chamba</p>
            </footer>
        </>
    );
};

export default CompanyPage;


