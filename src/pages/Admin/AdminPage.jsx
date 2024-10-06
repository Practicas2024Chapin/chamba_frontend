import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { listPendingRequest, acceptRequest } from '../../service/UrlConfig.js'; // Importar las funciones necesarias
import { useNavigate } from 'react-router-dom'; // Hook para la navegación

const AdminPage = () => {
    const [requests, setRequests] = useState([]); // Estado para almacenar las solicitudes
    const [error, setError] = useState(null); // Para manejar errores
    const navigate = useNavigate(); // Para redirigir al usuario

    // Función para obtener las solicitudes
    const fetchRequests = async () => {
        try {
            const response = await listPendingRequest(); // Llamada a la API
            setRequests(response.data.data || []); // Actualiza el estado con las solicitudes
        } catch (error) {
            console.error('Error fetching requests:', error); // Manejo de errores
            setError('Error al obtener las solicitudes.'); // Almacena el mensaje de error
        }
    };

    useEffect(() => {
        fetchRequests(); // Llamar a la función al montar el componente
    }, []);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('token'); // Eliminar token
        navigate('/'); // Redirigir a la página de inicio
    };

    // Función para aceptar una solicitud
    const handleAcceptRequest = async (requestId) => {
        try {
            const response = await acceptRequest(requestId); // Llamada a la API para aceptar la solicitud
            if (response.success) {
                // Actualiza el estado de la solicitud aceptada
                setRequests((prevRequests) =>
                    prevRequests.map((request) =>
                        request._id === requestId ? { ...request, status: 'ACCEPTED' } : request
                    )
                );
            }
        } catch (error) {
            console.error('Error accepting request:', error); // Manejo de errores
            setError('Error al aceptar la solicitud.'); // Almacena el mensaje de error
        }
    };

    return (
        <>
            <Navbar showButtons={false} />
            <section>
                {/* Encabezado con imagen de fondo */}
                <div className="relative w-full h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV1bmklQzMlQjNufGVufDB8fDB8fHww"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased font-sans font-semibold text-white mb-4 text-4xl lg:text-5xl">
                            Solicitudes pendientes de aprobación
                        </h2>
                        <p className="block font-sans text-xl text-white mb-9 opacity-80">
                            Gestiona las solicitudes de roles de los usuarios.
                        </p>
                        {/* Botón de Cerrar Sesión */}
                        <button 
                            onClick={handleLogout} 
                            className="px-4 py-2 bg-red-600 text-white rounded-full mt-4 hover:bg-red-700 transition-all">
                            Cerrar sesión
                        </button>
                    </div>
                </div>

                {/* Lista de solicitudes */}
                <div className="w-full flex justify-center py-8 bg-gray-100">
                    <div className="w-full max-w-3xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Solicitudes</h3>
                        <div className="grid gap-6">
                            {error && <p className="text-red-600 text-center">{error}</p>} {/* Mostrar error si existe */}
                            {Array.isArray(requests) && requests.length > 0 ? (
                                requests.map((request, index) => (
                                    <div key={request._id} className="bg-white rounded-lg shadow-lg p-6">
                                        <h4 className="text-xl font-semibold text-gray-800">
                                            Solicitud de: {request.idUser?.username || 'Correo no disponible'}
                                        </h4>
                                        <p className="text-gray-600 mb-2">
                                            Correo del usuario: {request.idUser?.email || 'Nombre no disponible'}
                                        </p>
                                        <p className="text-gray-500 mb-4">
                                            Estado: 
                                            <span className={`font-bold ${request.status === 'ACCEPTED' ? 'text-green-600' : 'text-yellow-600'}`}>
                                                {request.status}
                                            </span>
                                        </p>
                                        <div className="flex justify-between mt-4">
                                            <button 
                                                onClick={() => handleAcceptRequest(request._id)}
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all">
                                                Aceptar
                                            </button>
                                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
                                                Rechazar
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No hay solicitudes</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>Copyright © 2024 - Todos los derechos reservados por Chamba</p>
            </footer>
        </>
    );
};

export default AdminPage;










