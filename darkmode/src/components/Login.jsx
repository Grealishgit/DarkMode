import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const { darkMode, setDarkMode } = useOutletContext();
    return (
        <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-900 border-gray-100 text-white' : 'bg-[FAF5EE] text-gray-900'} flex items-center justify-center`}>
            <div className={`${darkMode ? 'dark:bg-gray-800 ' : 'bg-gray-100'}  rounded-lg p-4 max-w-sm ring shadow-xl ring-gray-900/5`}>

                <h3 className=" text-center font-medium text-2xl tracking-tight "><span className='text-[#FFA07A]'>Sign In</span> Here</h3>
                <form className=' p-6 -mx-2'>
                    <div className='mb-2 '>
                        <label htmlFor="">Email</label>
                        <input type="email" className='w-full py-2 border bg-gray-300 rounded-lg  focus:outline-3 focus:outline-[#FFA07A]' />
                    </div>
                    <div className='mb-4'> <label >Forgot <span className='text-[#FFA07A] underline cursor-pointer'>Password?</span> </label></div>


                    <div className='mb-4'>
                        <label htmlFor="">Password</label>
                        <input type="password" className='w-full py-2 border focus:outline-3 focus:outline-[#FFA07A] bg-gray-300 rounded-lg' />
                    </div>
                    <div>
                        <p>Don't have an Account? <span onClick={() => navigate('/signup')} className='text-[#FFA07A] cursor-pointer underline'>Register</span> </p>
                    </div>

                </form>
                <div className='flex items-center justify-center'>
                    <button className='bg-[#FFA07A] text-white font-semibold rounded-lg cursor-pointer py-1.5 px-8'>LOGIN</button>
                </div>

            </div>
        </div>
    )
}

export default Login