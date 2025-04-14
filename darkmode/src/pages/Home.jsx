import React, { useState } from 'react'
import { useOutletContext } from "react-router-dom";

const Home = () => {
    const { darkMode, setDarkMode } = useOutletContext(false)
    const [open, setOpen] = useState(false) // set to false initially
    const [openUp, setOpenUp] = useState(true) // set to false initially

    return (
        <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-800 text-white' : 'bg-[FAF5EE] text-black'} flex items-center justify-center`}>
            <div className='flex flex-col items-center justify-center'>
                {/* Sign In Button */}
                {!open && !openUp && (
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-2xl font-bold mb-4'>Welcome to <span className='text-yellow-500'>HunterDev!</span> </p>
                        <button onClick={() => setOpen(true)} className='bg-yellow-500 font-bold text-lg rounded-lg cursor-pointer py-1.5 px-6'>
                            Sign In
                        </button>
                    </div>
                )}

                {/* Login Popup */}
                {open && (
                    <div
                        className={`relative items-center justify-center top-4 mt-2 w-90 rounded-lg shadow-lg  border border-gray-300 z-50 p-6 space-y-4 transform transition-all duration-300 ease-in-out`}
                    >
                        <div className="flex flex-row items-center justify-center gap-2 text-gray-700 font-medium">
                            <p className="font-bold text-xl cursor-pointer text-center">Sign In</p>
                            <p onClick={() => setDarkMode(!darkMode)} className='absolute cursor-pointer top-2 right-2 underline text-black'>Mode</p>
                        </div>


                        <form className="text-gray-400 rounded-md space-y-3">
                            <div className='flex flex-col gap-1'>
                                <label>Email</label>
                                <input type="text" placeholder='hunter' className='w-full py-2 border pl-4 border-gray-300 rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Password</label>
                                <input type="password" className='w-full py-2 border pl-4 border-gray-300 rounded-lg' />
                            </div>
                        </form>

                        <button className="flex justify-center cursor-pointer w-full bg-yellow-500 px-6 py-2 rounded-lg text-white">
                            Login
                        </button>
                        <div className='items-center justify-center'>
                            <p className='text-gray-500'>Don't have an account? <span onClick={() => { setOpenUp(true); setOpen(false) }} className='text-yellow-500 cursor-pointer underline'>Sign Up</span> </p>
                        </div>
                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="text-sm text-gray-500 cursor-pointer font-bold hover:text-gray-700 mt-2 underline block text-center w-full"
                        >
                            Close
                        </button>
                    </div>
                )}
                {/* Sign Up Pop-Up */}
                {openUp && (
                    <div
                        className={`relative items-center justify-center top-4 mt-2 w-90 rounded-lg shadow-lg  border border-gray-300 z-50 p-7 space-y-4 transform transition-all duration-300 ease-in-out`}
                    >
                        <div className="flex items-center justify-center gap-2 
                         font-medium">
                            <p className="font-bold text-xl cursor-pointer text-center">Sign Up</p>
                            <p onClick={() => setDarkMode(!darkMode)} className='absolute cursor-pointer top-2 right-2 underline text-black'>Mode</p>
                        </div>

                        <form className="text-gray-400 rounded-md space-y-3">
                            <div className='flex flex-col gap-1'>
                                <label>Username</label>
                                <input type="text" placeholder='hunter' className='w-full py-2 border pl-4 border-gray-300 rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Email</label>
                                <input type="text" placeholder='hunter' className='w-full py-2 border pl-4 border-gray-300 rounded-lg' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label>Password</label>
                                <input type="password" className='w-full py-2 border pl-4 border-gray-300 rounded-lg' />
                            </div>
                        </form>

                        <button className="flex justify-center cursor-pointer w-full bg-yellow-500 px-6 py-2 rounded-lg text-white">
                            Sign Up
                        </button>
                        <div className='items-center justify-center'>
                            <p className='
                            '>Already have an account? <span onClick={() => { setOpenUp(false); setOpen(true) }} className='text-yellow-500 cursor-pointer underline'>Sign In</span> </p>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setOpenUp(false)}
                            className="text-sm 
                             font-bold cursor-pointer hover:text-gray-700 mt-2 underline block text-center w-full"
                        >
                            Close
                        </button>
                    </div>
                )}


            </div>
        </div>
    )
}

export default Home
