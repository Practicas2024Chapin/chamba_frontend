import React from 'react';

const InputNav = ({ showButtons }) => {
    return (
        <div className={`flex justify-center items-center h-full gap-7 ${!showButtons ? 'hidden' : ''}`}>
            <a href="/register">
                <div className="w-[25rem]">
                    <div className="relative h-10 w-full min-w-[200px] border-gray-400 border-[1px] rounded-full">
                        <div
                            className="peer flex justify-center items-center h-full w-full rounded-full border border-gray-400 bg-white px-4 py-2.5 font-sans text-sm font-medium text-gray-700 outline-none transition-all hover:bg-gray-100"
                            role="textbox"
                            contentEditable={false}
                        >
                            REGISTRARME COMO TRABAJADOR
                        </div>
                    </div>
                </div>
            </a>

            <a href="/register">
                <div className="w-[25rem]">
                    <div className="relative h-10 w-full min-w-[200px] border-gray-400 border-[1px] rounded-full">
                        <div
                            className="peer flex justify-center items-center h-full w-full rounded-full border border-gray-400 bg-white px-4 py-2.5 font-sans text-sm font-medium text-gray-700 outline-none transition-all hover:bg-gray-100"
                            role="textbox"
                            contentEditable={false}
                        >
                            REGISTRARME COMO EMPRESA
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default InputNav;





