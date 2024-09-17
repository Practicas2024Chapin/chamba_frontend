import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import CardViewJobAp from '../../components/cardsJob/CardViewJobAp';

const HomePage = () => {
    const navigate = useNavigate();
    
    // Estados para almacenar los datos del formulario
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState(''); // Estado para Location

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
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            ¡BIENVENIDO A CHAMBA!
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            ¿Estás buscando una oportunidad laboral? ¡Has llegado al lugar indicado!
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
        </>
    );
};

export default HomePage;





