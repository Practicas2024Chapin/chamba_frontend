import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InputNav from './InputNav';
import { createRequest } from '../../service/UrlConfig.js'; // Asegúrate de importar tu función que envía la solicitud

const Navbar = ({ showButtons }) => {
    const location = useLocation();
    const [requestStatus, setRequestStatus] = useState(null); // Estado para manejar el estado de la solicitud

    const handleRequestRole = async () => {
        const response = await createRequest({});
        if (response.error) {
            setRequestStatus("Error al enviar la solicitud.");
        } else {
            setRequestStatus("SOLICITUD DE CAMBIO DE ROL ENVIADA, ESPERA.");
        }
    };

    return (
        <>
            <nav className="bg-white border-b border-gray-300">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl font-bold text-black font-sans">CHAMBA</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse ml-auto">
                        <input
                            type="text"
                            placeholder="🔎 Buscar..."
                            className="inline-block px-4 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full focus:outline-none hover:bg-gray-100 transition-all w-[15rem]"
                        />
                        {/* Renderiza botones solo en /user y /company */}
                        {location.pathname === '/user' ? (
                            <>
                                <a
                                    href="/inbox"
                                    className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                >
                                    📧 INBOX
                                </a>
                                <a
                                    href="/profile"
                                    className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                >
                                    👤 MI PERFIL
                                </a>
                                {requestStatus ? (
                                    <span className="text-sm font-semibold text-green-600">
                                        {requestStatus}
                                    </span>
                                ) : (
                                    <button
                                        onClick={handleRequestRole}
                                        className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                    >
                                        SOLICITAR ROL
                                    </button>
                                )}
                            </>
                        ) : location.pathname === '/company' ? (
                            <>
                                <a
                                    href="/inbox"
                                    className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                >
                                    📧 INBOX
                                </a>
                                <a
                                    href="/profile"
                                    className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                >
                                    👤 MI PERFIL
                                </a>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                            >
                                🔑 LOGIN
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            <nav className="bg-white border-b border-gray-300">
                <div className="max-w-screen-xl mx-auto px-4 py-6">
                    <div className="flex justify-center">
                        <InputNav showButtons={showButtons} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;









