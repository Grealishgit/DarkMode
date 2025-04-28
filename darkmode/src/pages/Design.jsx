import React, { useState } from 'react';
import sky1 from '../assets/images/sky1.jpg';
import in1 from '../assets/images/in1.jpg';
import in2 from '../assets/images/in2.jpg';
import in3 from '../assets/images/in4.jpg';

const Design = () => {
    const [showImage, setShowImage] = useState('image1');
    const [showModal, setShowModal] = useState(null);

    const images = {
        image1: sky1,
        image2: in1,
        image3: in2,
        image4: in3
    };

    const captions = {
        image1: "High Rise Apartment",
        image2: "Fully Furnished",
        image3: "Elegance at Home",
        image4: "Your Perfect Home"
    };

    const openModal = (imgKey) => setShowModal(imgKey);
    const closeModal = () => setShowModal(null);

    return (
        <div className="flex items-start justify-center mt-4 bg-[#f5f2ff] w-full p-4 md:p-8 relative">

            {/* Popup Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-transparent bg-opacity-30"
                    onClick={closeModal}
                >
                    <div className="relative w-11/12 md:w-3/4 max-w-4xl">
                        <img src={images[showModal]} alt="Popup View" className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg object-contain cursor-pointer" />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">

                {/* Left Side - About the Home */}
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">About this Home</h3>

                    <div className="w-full h-auto rounded-md border mb-6 p-4 border-[#FFA07A]">
                        <p className="text-gray-700 font-medium leading-relaxed">
                            Welcome to your dream residence! This elegant high-rise apartment offers luxurious living spaces with a modern design, breathtaking views, and top-class amenities. Located in a prime area, it's perfect for families and professionals alike.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-gray-700 font-medium mb-6">
                        <p>🏡 3 Spacious Bedrooms</p>
                        <p>🛁 2 Modern Bathrooms</p>
                        <p>🚗 Private Parking</p>
                        <p>🌳 Beautiful Garden View</p>
                        <p>🏋️ Access to Gym and Pool</p>
                        <p>⚽ Football Arena Available</p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <p className="text-xl font-semibold text-[#FFA07A]">Elegant House @ Ksh.4,000,000</p>
                        <button className="px-6 py-2 bg-[#FFA07A] text-white font-semibold rounded-md  transition duration-300">
                            ADD TO WISHLIST
                        </button>
                    </div>
                </div>

                {/* Right Side - Images and Title */}
                <div className="md:w-1/2 flex flex-col">
                    <h2 className="font-semibold text-center text-2xl md:text-3xl mb-6">Find Your Elegant Home Here.</h2>

                    <div className="flex flex-col items-center">
                        {/* Main Display Image */}
                        <div className="relative w-full flex">
                            <img
                                onClick={() => openModal(showImage)}
                                src={images[showImage]}
                                alt="Main View"
                                className="h-60 md:h-72 shadow-black w-full object-cover rounded-lg cursor-pointer shadow-md mb-4"
                            />
                            <p className="absolute bottom-5 left-3 text-white text-lg font-semibold drop-shadow">{captions[showImage]}</p>
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-3 gap-4 w-full">
                            <img
                                onClick={() => setShowImage('image2')}
                                src={in1}
                                alt="Interior View 1"
                                className="h-24 md:h-28 w-full object-cover shadow-md shadow-[#FFA07A] rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                onClick={() => setShowImage('image3')}
                                src={in2}
                                alt="Interior View 2"
                                className="h-24 md:h-28 w-full object-cover shadow-md shadow-[#FFA07A] rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                            <img
                                onClick={() => setShowImage('image4')}
                                src={in3}
                                alt="Interior View 3"
                                className="h-24 md:h-28 w-full shadow-md shadow-[#FFA07A] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Design;
