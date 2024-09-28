import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import CardViewJobLog from '../../components/cardsJob/CardViewJobLog';

const UserPage = () => {

    return (
        <>
            <Navbar showButtons={false} />
            <section>
            <div className="relative w-full h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHJldW5pJUMzJUIzbnxlbnwwfDB8MHx8fDA%3D"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased font-sans font-semibold text-white mb-4 text-4xl lg:text-5xl">
                            ¡EMPLEOS DISPONIBLES!
                        </h2>
                        <p className="block font-sans text-xl text-white mb-9 opacity-80">
                            ¿Estás buscando una oportunidad laboral? Aquí tienes una lista de empleos para ti.
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                    <div className="my-8 mx-[3rem] w-full max-w-screen-xl">
                        <CardViewJobLog />
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>Copyright © 2024 - Todos los derechos reservados por Chamba</p>
            </footer>
        </>
    );
};

export default UserPage;

