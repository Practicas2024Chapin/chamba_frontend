import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const HomePage = () => {
    const navigate = useNavigate(); // Hook para redirigir

    const handlePublishClick = () => {
        navigate('/register'); // Redirige a la página de registro
    };

    return (
        <>
            <Navbar />
            <div className="text-black bg-gray-100 w-full h-[100vh] flex items-center justify-center">
                {/* Card para Post a Job Offer */}
                <div className="bg-white w-[28rem] p-8 rounded-lg shadow-lg">
                    {/* Título de la sección */}
                    <h1 className="text-2xl font-semibold mb-6 text-center">Post a Job offer</h1>

                    {/* Input para categoría de trabajo */}
                    <input
                        type="text"
                        placeholder="Job category"
                        className="w-full mb-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-400 rounded-full focus:outline-none focus:border-black hover:bg-gray-100 transition-all"
                    />

                    {/* Input para ubicación */}
                    <input
                        type="text"
                        placeholder="Location"
                        className="w-full mb-4 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-400 rounded-full focus:outline-none focus:border-black hover:bg-gray-100 transition-all"
                    />

                    {/* Input para correo electrónico */}
                    <input
                        type="email"
                        placeholder="email"
                        className="w-full mb-6 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-400 rounded-full focus:outline-none focus:border-black hover:bg-gray-100 transition-all"
                    />

                    {/* Botón de publish */}
                    <button
                        onClick={handlePublishClick} // Redirige al hacer clic
                        className="w-full px-6 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-900 transition-all"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </>
    );
};

export default HomePage;


