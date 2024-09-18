import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const MyProfile = () => {

    return (
        <>
            <Navbar showButtons={false} />
            <section>
                <div className="relative w-full h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://media.istockphoto.com/id/1934523700/es/foto/primer-plano-de-la-mano-del-hombre-usando-el-tel%C3%A9fono-m%C3%B3vil.webp?a=1&b=1&s=612x612&w=0&k=20&c=WzEp0ZBBf5cb-NGoZVOXhy2RzGSDgUvAhPLGQgavvJ8="
                        alt="profile-background"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            Mi Perfil
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            Gestiona tu perfil y actualiza tu información.
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center my-12">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Información de Usuario</h3>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Nombre de Usuario
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Nombre de Usuario"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Correo Electrónico"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                                Biografía
                            </label>
                            <textarea
                                id="bio"
                                rows="4"
                                placeholder="Escribe algo sobre ti..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                                    className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-blue-700 transition-all"
                        >
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyProfile;

