import React from 'react'

const CardViewJobAp = () => {
    return (
        <div className="bg-white max-w-md mx-auto p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">

            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Desarrollador web</h2>


            <p className="text-gray-700 mb-4">Este es un empleo de medio tiempo requisitos
                Java
                Css
                Tailwind
                SQL
                TypeScript

            </p>


            <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500">Company:</span>
                <p className="text-lg text-gray-800">Amazon</p>
            </div>


            <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500">Category:</span>
                <p className="text-lg text-gray-800">Programacion y desarrollo</p>
            </div>


            <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500">Location:</span>
                <p className="text-lg text-gray-800">Ciudad de Guatemala</p>
            </div>


            <div className="mb-6">
                <span className="text-sm font-semibold text-gray-500">Estado de empleo:</span>
                <p className={`text-lg font-bold ${status ? 'text-green-600' : 'text-red-600'}`}>
                    {status ? 'Active' : 'Inactive'}
                </p>
            </div>

            <button
                className="w-full px-6 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all"
            >
                Apply Now
            </button>
        </div>
    )
}

export default CardViewJobAp