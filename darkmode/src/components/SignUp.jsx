import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

const SignUp = () => {
    const { darkMode, setDarkMode } = useOutletContext(true);
    const navigate = useNavigate();
    return (
        <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-900 border-gray-100 text-white' : 'bg-[FAF5EE] text-gray-900'} flex items-center justify-center`}>
            <div className={`${darkMode ? 'dark:bg-gray-800 ' : 'bg-gray-100'}  rounded-lg md:p-4 p-2 max-w-sm ring shadow-xl ring-gray-900/5`}>

                <h3 className=" text-center font-medium text-2xl tracking-tight "><span className='text-[#FFA07A]'>Sign Up</span> Here</h3>
                <form className='md:p-8 p-3 md:-mx-3'>
                    <div className='mb-2 '>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='username' className='w-full pl-2 py-2 border bg-gray-300 rounded-lg  focus:outline-3 focus:outline-[#FFA07A]' />
                    </div>

                    <div className='mb-2 '>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='email' className='w-full py-2 pl-2 border bg-gray-300 rounded-lg  focus:outline-3 focus:outline-[#FFA07A]' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='password' className='w-full pl-2 py-2 border focus:outline-3 focus:outline-[#FFA07A] bg-gray-300 rounded-lg' />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" placeholder='password' className='w-full pl-2 py-2 border focus:outline-3 focus:outline-[#FFA07A] bg-gray-300 rounded-lg' />
                    </div>
                    <p className='text-center font-bold mb-2'>Or Sign up using</p>
                    <div className='flex flex-row items-center justify-center gap-3'>
                        <FaGoogle className='w-auto cursor-pointer h-5 hover:text-[#FFA07A]' />
                        <FaFacebook className='w-auto cursor-pointer h-5 hover:text-[#FFA07A]' />
                        <FaGithub className='w-auto cursor-pointer h-5 hover:text-[#FFA07A]' />
                        <FaMicrosoft className='w-auto cursor-pointer h-5 hover:text-[#FFA07A]' />

                    </div>
                    <div className='justify-center flex mt-3'>
                        <p className='text-center font-semibold'>Already have an Account? <span onClick={() => navigate('/')} className='text-[#FFA07A] cursor-pointer font-bold text-lg underline'>Login</span> </p>
                    </div>

                </form>
                <div className='flex items-center mb-4 justify-center'>
                    <button onClick={() => setDarkMode(!darkMode)} className='bg-[#FFA07A] text-white font-semibold rounded-lg cursor-pointer py-1.5 px-8'>SIGN UP</button>
                </div>

            </div>
        </div>
    )
}

export default SignUp