import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import CardViewJobAp from '../../components/cardsJob/CardViewJobAp';

const HomePage = () => {
    const navigate = useNavigate(); // Hook para redirigir

    const handlePublishClick = () => {
        navigate('/register'); // Redirige a la página de registro
    };

    return (
        <>
            <Navbar />
            <section>
                <div className="relative w-full h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            ¡EMPLEOS DISPONIBLES!
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            ¿Estás buscando una oportunidad laboral? ¡Has llegado al lugar indicado!
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

export default HomePage;


