import React from 'react'
import InputNav from './InputNav'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white border-gray-400 border-b-[1px] ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">CHAMBA</span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <a href="tel:5541251234" className="text-sm text-gray-500 ">INBOX</a>
                        <a href="#" className="text-sm text-gray-500 hover:underline">MI CUENTA</a>
                    </div>
                </div>
            </nav>

            <nav className="bg-white border-gray-400 border-b-[1px]">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <InputNav />
                    </div>
                </div>
            </nav>

        </>)
}

export default Navbar