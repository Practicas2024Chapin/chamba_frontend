import React from 'react'

const CardViewJobAp = () => {
    return (
        <div className="bg-white max-w-xs mx-auto p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">

            <h2 className="text-xl font-bold mb-2 text-center text-gray-800">Desarrollador web</h2>

            <p className="text-gray-700 mb-2 text-sm">Este es un empleo de medio tiempo requisitos:
                Java, CSS, Tailwind, SQL, TypeScript
            </p>

            <div className="mb-2">
                <span className="text-xs font-semibold text-gray-500">Company:</span>
                <p className="text-base text-gray-800">Amazon</p>
            </div>

            <div className="mb-2">
                <span className="text-xs font-semibold text-gray-500">Category:</span>
                <p className="text-base text-gray-800">Programación y desarrollo</p>
            </div>

            <div className="mb-2">
                <span className="text-xs font-semibold text-gray-500">Location:</span>
                <p className="text-base text-gray-800">Ciudad de Guatemala</p>
            </div>

            <div className="mb-4">
                <span className="text-xs font-semibold text-gray-500">Estado de empleo:</span>
                <p className={`text-base font-bold ${status ? 'text-green-600' : 'text-red-600'}`}>
                    {status ? 'Active' : 'Inactive'}
                </p>
            </div>

            <button
                className="w-full px-4 py-2 text-xs font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all"
            >
                Apply Now
            </button>
        </div>
    )
}

export default CardViewJobAp
