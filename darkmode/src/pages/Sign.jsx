import React, { useState } from 'react'
import bg from '../assets/bg.png'
import { useOutletContext } from 'react-router-dom';
import bg2 from '../assets/bg-2.png'

const Sign = () => {

    const [open, setOpen] = useState(false);
    const [openIn, setOpenIn] = useState(false);
    const { darkMode, setDarkMode } = useOutletContext()

    return (
        <div className={`h-screen flex ${darkMode ? 'dark:bg-gray-800 border-white-50 text-white' : 'bg-[FAF5EE] border-gray-500 text-black'} `}>
            <div
                style={{
                    backgroundImage: `url(${darkMode ? bg2 : bg})`,
                }}
                className="w-1/2 md:flex hidden justify-center items-center bg-cover bg-center bg-no-repeat"
            >
                <p className="text-3xl font-bold text-yellow-500">Welcome to RetroShare</p>
            </div>

            {open && (
                <div className='md:w-1/2 w-full flex justify-center items-center' >

                    <form className='p-6 rounded-lg  border  w-90'>
                        <div className='relative flex flex-row justify-center items-center'>
                            <p className='text-center font-bold text-2xl'>Sign Up</p>
                            <p onClick={() => setDarkMode(!darkMode)} className='absolute top-2 right-2 underline font-bold cursor-pointer'>Mode</p>
                        </div>

                        <div className='flex flex-col mb-3'>
                            <label className='font-semibold' htmlFor="">Username</label>
                            <input type="text" placeholder='hunter' className='border  pl-4 w-full py-2 rounded-lg' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='font-semibold' htmlFor="">Email</label>
                            <input type="email" placeholder='hunter@gmail.com' className='border  pl-4 w-full py-2 rounded-lg' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='font-semibold' htmlFor="">Password</label>
                            <input type="password" placeholder='hunter' className='border  pl-4 w-full py-2 rounded-lg' />
                        </div>

                        <p className='mb-3 font-semibold'>Already have an Account? <span onClick={() => { setOpenIn(true); setOpen(false) }} className='text-yellow-400 cursor-pointer font-bold underline'>Login</span> </p>

                        <button className='w-full py-2 bg-amber-400 rounded-lg cursor-pointer font-bold text-lg'>Sign Up</button>
                        <button onClick={() => setOpen(false)} className='mt-6 text-gray-400 cursor-pointer underline'>Close</button>
                    </form>
                </div>

            )}
            {
                !open && !openIn && (
                    <div className='md:w-1/2 w-full flex justify-center items-center '>
                        <button onClick={() => setOpen(true)} className='font-semibold bg-yellow-500 py-2 px-10 cursor-pointer rounded-lg'>Get Started</button>
                    </div>
                )
            }

            {openIn && (
                <div className='md:w-1/2 w-full flex justify-center items-center '>
                    <form className='p-6 rounded-lg border border-gray-500 w-90'>
                        <div className='relative flex flex-row justify-center items-center'>
                            <p className='text-center font-bold text-2xl'>Sign In</p>
                            <p onClick={() => setDarkMode(!darkMode)} className='absolute top-2 right-2 underline font-bold cursor-pointer'>Mode</p>
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='font-semibold' htmlFor="">Email</label>
                            <input type="email" placeholder='hunter@gmail.com' className='border border-gray-500 pl-4 w-full py-2 rounded-lg' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='font-semibold' htmlFor="">Password</label>
                            <input type="password" placeholder='hunter' className='border border-gray-500 pl-4 w-full py-2 rounded-lg' />
                        </div>

                        <p className='mb-3 font-semibold'>Don't have an Account? <span onClick={() => { setOpen(true); setOpenIn(false) }} className='text-yellow-400 cursor-pointer font-bold underline'>Sign Up</span> </p>

                        <button className='w-full py-2 bg-amber-400 rounded-lg cursor-pointer font-bold text-lg'>Sign Up</button>
                        <button onClick={() => setOpenIn(false)} className='mt-6 text-gray-400 cursor-pointer underline'>Close</button>
                    </form>
                </div>
            )}

        </div>
    )
}

export default Sign