import React from 'react'
import Design from './Design'

const Homes = () => {
    return (
        <div className='flex justify-center items-center mt-20 w-full min-h-screen bg-[#f5f2ff]'>
            <div className='w-full flex flex-col'>
                <Design />
                <Design />
                <Design />
                <Design />
            </div>
        </div>
    )
}

export default Homes