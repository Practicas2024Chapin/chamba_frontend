import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://chamba-backend-s4bg-h50gjukbp-mvalladares-2019607s-projects.vercel.app/practica/v1/auth/login', {
                email,
                password,
            });
    
            const token = response.data.userDetails.token;
            const role = response.data.userDetails.role;
            console.log('Inicio de sesión exitoso:', response.data);
    
            localStorage.setItem('token', token);
            localStorage.setItem('rol', role);
    
            // Redirigir según el tipo de usuario
            if (role === 'ADMIN_GENERAL') {
                navigate('/admin');
            } else if (role === 'COMPANY_ROLE') {
                navigate('/user');
            } else {
                navigate('/user');
            }
        } catch (err) {
            // Mostrar un mensaje de error en caso de credenciales incorrectas o fallo del servidor
            if (err.response && err.response.status === 400) {
                setError('Credenciales incorrectas o el usuario no existe.');
            } else {
                setError('Error al iniciar sesión. Inténtalo más tarde.');
            }
        }
    };
    

    return (
        <>
            <section>
                <div className="relative w-full h-64 md:h-80">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/38/awhCbhLqRceCdjcPQUnn_IMG_0249.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxvZmljaW5hfGVufDB8fDB8fHww"
                        alt="login background"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl md:text-4xl">
                            ¡INICIA SESIÓN EN TU CUENTA!
                        </h2>
                        <p className="block antialiased font-sans text-lg md:text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            Ingresa tus credenciales para acceder a tu cuenta.
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="my-8 mx-4 w-full max-w-sm">
                        <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white shadow-md shadow-black/5 p-8">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                                        placeholder="********"
                                    />
                                </div>
                                {error && <p className="text-red-600">{error}</p>}
                                <button
                                    type="submit"
                                    className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                >
                                    Iniciar Sesión
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>Copyright © 2024 - Todos los derechos reservados por Chamba</p>
            </footer>
        </>
    );
}

export default LoginPage;





