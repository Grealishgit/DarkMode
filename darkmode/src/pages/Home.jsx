import React, { useState } from 'react'

const Home = () => {

    const [darkMode, setIsDarkMode] = useState(true);

    return (
        <div className={`min-h-screen ${darkMode ? 'dark:bg-gray-900 text-white' : 'bg-[FAF5EE]'} flex items-center justify-center`}>
            <div className={`${darkMode ? 'dark:bg-gray-800 ' : 'bg-[#1D503A]'}  rounded-lg p-4 max-w-sm ring shadow-xl ring-gray-900/5`}>
                <div>
                    <button onClick={() => setIsDarkMode(!darkMode)} className="inline-flex items-center cursor-pointer px-4 py-4 justify-center rounded-full bg-[#FFA07A] p-2 shadow-lg">
                    </button>
                </div>
                <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
                <div className='flex items-center justify-center'>
                    <button onClick={() => setIsDarkMode(!darkMode)} className='bg-[#FFA07A] rounded-lg cursor-pointer py-1.5 px-4'>CLICK HERE</button>
                </div>
            </div>
        </div>
    )
}

export default Home