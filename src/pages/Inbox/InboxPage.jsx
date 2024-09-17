import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import InboxList from '../../components/inbox/InboxList';

const InboxPage = () => {
    return (
        <>
            <Navbar showButtons={false} />
            <section>
                <div className="relative w-full h-[20rem]">
                    <img
                        className="absolute h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1555685818-207074bd83ef?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="nature"
                    />
                    <div className="absolute inset-0 h-full w-full bg-black/50"></div>
                    <div className="relative pt-28 text-center">
                        <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl">
                            TU BANDEJA DE ENTRADA
                        </h2>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-9 opacity-70">
                            Aquí puedes ver todos tus mensajes y notificaciones.
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
                    <div className="my-8 mx-[3rem] w-full max-w-screen-xl">
                    <InboxList />
                    </div>
                </div>
            </section>
        </>
    );
};

export default InboxPage;
