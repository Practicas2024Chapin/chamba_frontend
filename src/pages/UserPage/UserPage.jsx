import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import CardViewJobAp from '../../components/cardsJob/CardViewJobAp';

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
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            ¡EMPLEOS DISPONIBLES!
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            ¿Estás buscando una oportunidad laboral? A continuación te mostramos una lista...
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                    <div className="my-8 mx-[3rem] w-full max-w-screen-xl">
                        <CardViewJobAp />
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserPage;

