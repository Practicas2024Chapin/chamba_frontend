import React from 'react';

const InputNav = () => {
    return (
        <>
            <div className='flex gap-7 pl-[20%]'>
                <a href=""> <div className="w-[25rem]">
                    <div className="relative h-10 w-full min-w-[200px] border-gray-400 border-[1px] rounded-[5rem]">
                        <a href="http://localhost:5173/">
                            <div
                                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus-within:border-2 focus-within:border-black focus-within:border-t-transparent focus-within:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                role="textbox"
                                contentEditable={false}
                            >
                                REGISTRARME COMO TRABAJADOR
                            </div>

                        </a>
                    </div>
                </div>
                </a>

                <a href="http://localhost:5173/"><div className="w-[25rem]">
                    <div className="relative h-10 w-full min-w-[200px] border-gray-400 border-[1px] rounded-[5rem]">
                        <div
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus-within:border-2 focus-within:border-black focus-within:border-t-transparent focus-within:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            role="textbox"
                            contentEditable={false}
                        >
                            REGISTRARME COMO EMPRESA
                        </div>

                    </div>
                </div></a>

            </div>
        </>
    );
};

export default InputNav;
