import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [activeTab, setActiveTab] = useState('Home');
    const [sidebar, setSidebar] = useState(false);

    return (
        <nav className={`w-full ${darkMode ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-200 shadow-md text-gray-900'} fixed z-50 md:py-3 py-2`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo on the left */}
                <div className="flex  items-center gap-2">
                    <img src={logo} alt="Logo" className="h-10 cursor-pointer rounded-full w-auto object-contain" />
                    <span className="text-xl cursor-pointer font-bold">Test-<span className='text-[#FFA07A]'>Site</span> </span>
                </div>

                {/* Nav links */}
                <ul className="md:flex hidden gap-6">
                    {['Home', 'Product', 'About', 'Contact'].map((tab) => (
                        <li
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-lg font-semibold  cursor-pointer ${activeTab === tab ? 'border-b-4 border-[#FFA07A] -pb-2' : ''
                                }`}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>

                <div className='flex mr-6'>
                    {!darkMode ? <FaToggleOff onClick={() => setDarkMode(true)} className='w-auto md:block hidden cursor-pointer h-7' />
                        : <FaToggleOn onClick={() => setDarkMode(false)} className='w-auto md:block hidden cursor-pointer h-7' />}
                    <IoMenu onClick={() => setSidebar(true)} className='w-auto h-7 cursor-pointer md:hidden block' />
                </div>

                {sidebar &&
                    <div className={`h-screen fixed ${darkMode ? 'dark:bg-gray-800 text-white' : 'bg-gray-100 text-black'} md:hidden block  z-30 w-64 top-0 right-0`}>
                        <div className='flex justify-between mx-6'>
                            {!darkMode ? <FaToggleOff onClick={() => setDarkMode(true)} className='w-auto  h-7 mt-4 mr-4' />
                                : <FaToggleOn onClick={() => setDarkMode(false)} className='w-auto  h-7 mt-4 mr-4' />}
                            <IoMdClose onClick={() => setSidebar(false)} className='w-auto h-7 mt-4 ml-4' />
                        </div>
                        <ul className="flex flex-col items-center  gap-6">
                            {['Home', 'Product', 'About', 'Contact'].map((tab) => (
                                <li
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`text-lg font-semibold  cursor-pointer ${activeTab === tab ? 'border-b-4 border-[#FFA07A] -pb-2' : ''
                                        }`}
                                >
                                    {tab}
                                </li>
                            ))}
                        </ul>
                    </div>
                }


            </div>
        </nav>
    );
};

export default Navbar;
