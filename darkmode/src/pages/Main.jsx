import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center w-full min-h-screen bg-[#f5f2ff]'>
            <div className='flex flex-col md:w-150 w-80'>
                <p className='text-4xl text-[#FFA07A] items-center font-semibold'>WELCOME TO SHALOM HOMES</p>
                <div className='justify-center items-center flex'>
                    <button onClick={() => navigate('/homes')} className='w-100 items-center py-3 mt-5 rounded-lg cursor-pointer bg-orange-500 text-white text-lg'>VIEW HOMES</button>

                </div>
            </div>


        </div >


    )
}

export default Main