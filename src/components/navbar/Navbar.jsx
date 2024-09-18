import React from 'react';
import InputNav from './InputNav';

const Navbar = ({ showButtons }) => {
    return (
        <>
            <nav className="bg-white border-b border-gray-300">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl font-bold text-black font-sans">CHAMBA</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse ml-auto">
                        <input
                            type="text"
                            placeholder="🔎 Buscar..."
                            className="inline-block px-4 py-2 text-sm font-semibold text-black bg-white border border-gray-400 rounded-full focus:outline-none hover:bg-gray-100 transition-all w-[15rem]"
                        />
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





