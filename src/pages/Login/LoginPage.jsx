import React from 'react';

const LoginPage = () => {
    return (
        <>
            <section>
                <div className="relative w-full h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-4.0.3&q=80&w=2072&auto=format&fit=crop"
                        alt="login background"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            ¡INICIA SESIÓN EN TU CUENTA!
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            Ingresa tus credenciales para acceder a tu cuenta.
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="my-8 mx-[3rem] w-full max-w-screen-sm">
                        <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-8">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                        placeholder="correo@ejemplo.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Contraseña
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                        placeholder="********"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                            className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                            Recuérdame
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-black hover:text-gray-700">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;


