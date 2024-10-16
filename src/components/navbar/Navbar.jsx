import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputNav from './InputNav';
import { createRequest } from '../../service/UrlConfig.js'; // Asegúrate de importar tu función que envía la solicitud
import { toast } from 'react-hot-toast'; // Importa toast de react-hot-toast

const Navbar = ({ showButtons, userRole }) => {
    const location = useLocation();
    const navigate = useNavigate(); // Usamos useNavigate para redirigir
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

    const handleRequestRole = async () => {
        try {
            const response = await createRequest({});
            if (response.error) {
                toast.error("La solicitud ya ha sido enviada.");
            } else {
                toast.success("Solicitud enviada, espera.");
            }
        } catch (error) {
            toast.error("La solicitud ya ha sido enviada.");
        }
    };

    const handleCompanyClick = (e) => {
        if ( role !== 'COMPANY_ROLE') {
            e.preventDefault(); // Evitar redirección
            toast.error('Debes solicitar el rol de COMPAÑIA antes de acceder.');
        } else {
            navigate('/company');
        }
    };

    return (
        <>
            <nav className="bg-white border-b border-gray-300">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl font-bold text-black font-sans">CHAMBA</span>
                    </Link>

                    {/* Botón del menú móvil */}
                    <button
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>

                    {/* Menú en pantallas grandes */}
                    <div className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 rtl:space-x-reverse ml-auto">
                            <input
                                type="text"
                                placeholder="🔎 Buscar..."
                                className="inline-block px-4 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full focus:outline-none hover:bg-gray-100 transition-all w-[15rem] mb-4 md:mb-0"
                            />
                            {/* Renderiza botones solo en /profile */}
                            {location.pathname === '/profile' ? (
                                <>
                                    <a
                                        href="/user"
                                        className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                    >
                                        🛠️ TRABAJADOR
                                    </a>
                                    <a
                                        href="/company"
                                        className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                        onClick={handleCompanyClick} // Controla el click en compañía
                                    >
                                        🏢 COMPAÑIA
                                    </a>
                                </>
                            ) : location.pathname === '/user' ? (
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
                                    <a
                                        href="/company"
                                        className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                        onClick={handleCompanyClick} // Controla el click en compañía
                                    >
                                        🏢 COMPAÑIA
                                    </a>

                                        <button
                                            onClick={handleRequestRole}
                                            className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                        >
                                            SOLICITAR ROL
                                        </button>
                                    
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
                                    <a
                                        href="/user"
                                        className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                                    >
                                        🛠️ TRABAJADOR
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














