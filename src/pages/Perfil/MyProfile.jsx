import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { getInfoUserLogged, getUserApplications } from '../../service/UrlConfig.js';

const MyProfile = () => {
    const [formData, setFormData] = useState({
        email: {
            value: '',
            error: null
        },
        username: {
            value: '',
            error: null
        },
    });

    const [applications, setApplications] = useState([]); // Estado para almacenar las aplicaciones

    const getInfoUser = async () => {
        const response = await getInfoUserLogged();
        if (response.data) {
            setFormData({
                email: {
                    value: response.data.userDetails.email || '',
                    error: null
                },
                username: {
                    value: response.data.userDetails.username || '',
                    error: null
                }
            });
        }
    };

    const fetchUserApplications = async () => {
        const response = await getUserApplications(); // Llama a la función para obtener aplicaciones
        if (response && !response.error) {
            setApplications(response.data.applications); // Actualiza el estado con las aplicaciones
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getInfoUser();
            fetchUserApplications(); // Llama a la función para obtener las aplicaciones
        }
    }, []);

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
                                value={formData.username.value}
                                disabled
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
                                value={formData.email.value}
                                disabled
                                placeholder="Correo Electrónico"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Nueva sección para mostrar aplicaciones */}
                <div className="w-full flex justify-center my-12">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Trabajos a los que he aplicado</h3>
                        {applications.length > 0 ? (
                            applications.map((application) => (
                                application.idPost && ( // Solo renderiza las aplicaciones que tienen idPost
                                    <div key={application._id} className="mb-6 p-6 border-b border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200">
                                        <h4 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                                            {application.idPost.title}
                                        </h4>
                                        <p className="text-gray-700 mb-1">
                                            <span className="font-medium text-indigo-500">🏢 Compañía:</span> {application.idPost.company}
                                        </p>
                                        <p className="text-gray-700 mb-1">
                                            <span className="font-medium text-indigo-500">🗂️ Categoría:</span> {application.idPost.category}
                                        </p>
                                        <p className="text-gray-700">
                                            <span className="font-medium text-indigo-500">📅 Fecha de Aplicación:</span> {new Date(application.appliedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                )
                            ))
                        ) : (
                            <p className="text-center text-gray-500 text-lg">No has aplicado a ningún trabajo aún.</p>
                        )}


                    </div>
                </div>

            </section>
        </>
    );
};

export default MyProfile;





