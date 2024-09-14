import React from 'react'

const FormPostJob = () => {
    return (
        <>
            <div className="bg-white max-w-sm mx-auto p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Espacio para la imagen */}
                <div className="w-full h-48 mb-6 rounded-t-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Job Offer"
                        className="w-full h-full object-cover"
                    />
                </div>


                {/*Mapear estado */}
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Oferta laboral</h1>

                <input
                    type="text"
                    placeholder="Job Category"
                    className="w-full mb-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />

                <input
                    type="text"
                    placeholder="Location"
                    className="w-full mb-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />


                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-6 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />
                <input
                    type="text"
                    placeholder="Company"
                    className="w-full mb-6 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />



                <button
                    className="w-full px-6 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all"
                >
                    Publish
                </button>
            </div>
        </>

    )
}

export default FormPostJob