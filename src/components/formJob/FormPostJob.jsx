import React from 'react'

const FormPostJob = () => {

    return (
        <>
            <div className="bg-white max-w-xs mx-auto p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                {/* Espacio para la imagen */}
                <div className="w-full h-36 mb-4 rounded-t-lg overflow-hidden">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhn6biFlhgIdBfnX0IsTGOxToyOXr98SQEg&s"
                        alt="Job Offer"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Mapear estado */}
                <h1 className="text-xl font-bold mb-4 text-center text-gray-800">Oferta laboral</h1>

                <input
                    type="text"
                    placeholder="Título"
                    className="w-full mb-3 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <input
                    type="text"
                    placeholder="Descripción"
                    className="w-full mb-3 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    className="w-full mb-4 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />
                <input
                    type="text"
                    placeholder="Ubicación"
                    className="w-full mb-4 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <button
                    className="w-full px-4 py-1.5 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 transition-all"
                >
                    Publicar
                </button>
            </div>
        </>
    )
}

export default FormPostJob;
