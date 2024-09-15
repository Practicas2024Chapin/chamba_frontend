import React from 'react';
import InputNav from './InputNav';

const Navbar = () => {
    return (
        <>
            {/* Navbar superior */}
            <nav className="bg-white border-b border-gray-300">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    {/* Logo */}
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl font-bold text-black font-sans">CHAMBA</span>
                    </a>

                    {/* Input de búsqueda y botones de INBOX y MY PROFILE */}
                    <div className="flex items-center space-x-6 rtl:space-x-reverse ml-auto">
                        {/* Input de búsqueda */}
                        <input
                            type="text"
                            placeholder="🔎 Buscar..."
                            className="inline-block px-4 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full focus:outline-none hover:bg-gray-100 transition-all w-[15rem]"
                        />

                        {/* Botones de INBOX y MY PROFILE */}
                        <a
                            href="tel:5541251234"
                            className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                        >
                            📧 INBOX
                        </a>
                        <a
                            href="#"
                            className="inline-block px-6 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full hover:bg-gray-100 transition-all"
                        >
                           👤 MI PERFIL
                        </a>
                    </div>
                </div>
            </nav>

            {/* Navbar inferior con InputNav */}
            <nav className="bg-white border-b border-gray-300">
                <div className="max-w-screen-xl mx-auto px-4 py-6">
                    <div className="flex justify-center">
                        <InputNav />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;




