import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import CardViewJobAp from '../../components/cardsJob/CardViewJobAp';

const HomePage = () => {
    const navigate = useNavigate();

    // Estados para almacenar los datos del formulario
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState(''); // Estado para Location
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHx3b3JrfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxidXNpbmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirigir a /register con los datos
        navigate('/register', {
            state: {
                company,
                category,
                location, // Incluyendo location en los datos que se envían
            },
        });
    };

    return (
        <>
            <Navbar showButtons={true} />
            <section>
                <div className="relative w-full h-[20rem]">
                    {/* Mostrar la imagen actual del carrusel */}
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src={images[currentImageIndex]}
                        alt="carousel"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold text-white mb-4 text-4xl lg:text-5xl">
                            ¡BIENVENIDO A CHAMBA!
                        </h2>
                        <p className="block font-sans text-xl text-white mb-9 opacity-80">
                            Tu futuro laboral comienza aquí.
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                    <div className="my-8 mx-[3rem] w-full max-w-screen-xl">
                        <CardViewJobAp />
                    </div>
                </div>

                {/* Card similar a las publicaciones de empleo, pero contiene el formulario */}
                <div className="w-full flex justify-center mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Publicar un trabajo</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="company">
                                    Compañía
                                </label>
                                <input
                                    id="company"
                                    type="text"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="Nombre de la compañía"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    id="location"
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Ubicación"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="category">
                                    Categoría
                                </label>
                                <input
                                    id="category"
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    placeholder="Categoría del trabajo"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-700 focus:border-gray-700 sm:text-sm"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-blue-700 transition-all"
                                >
                                    Publicar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 text-center">
                <div className="flex justify-center gap-8">
                    <div className="bg-gray-800 p-6 w-64 h-64 flex flex-col justify-center items-center rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold">Misión</h3>
                        <p className="text-sm mt-2 text-justify cursor-pointer" onCopy={(e) => e.preventDefault()}>
                            Nuestra misión es conectar a empresas y talentos de manera eficiente, 
                            facilitando el proceso de búsqueda de empleo y la contratación. Nos 
                            esforzamos por ofrecer una plataforma accesible y confiable que impulse 
                            el crecimiento profesional y permita a las personas encontrar su lugar 
                            en el mercado laboral.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 w-64 h-64 flex flex-col justify-center items-center rounded-lg transition-transform transform hover:scale-105">
                        <h3 className="text-lg font-semibold">Visión</h3>
                        <p className="text-sm mt-2 text-justify cursor-pointer" onCopy={(e) => e.preventDefault()}>
                            Nuestra visión es ser el puente esencial entre empresas y talentos, 
                            optimizando el proceso de búsqueda de empleo y contratación. Aspiramos a 
                            consolidar una plataforma accesible y confiable que fomente el desarrollo 
                            profesional y ayude a las personas a encontrar su lugar ideal.
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-4 mt-8">
                    <p>Copyright © 2024 - Todos los derechos reservados por Chamba</p>
                </div>
            </footer>
        </>
    );
};

export default HomePage;






