import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [darkMode, setDarkMode] = useState("");

    return (
        <>
            {/* Main Layout Wrapper */}
            <div className={`h-screen flex
                ${darkMode ? "bg-gray-800" : "bg-gray-100"}
                `}>
                {/* Sidebar (Fixed) */}

                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

                {/* Main Content Section */}
                <main className={`flex-1
                    ${darkMode ? "bg-gray-700 border-gray-300" : "bg-gray-100 border-orange-400"}
                    overflow-y-auto `}>
                    <Outlet context={{ darkMode, setDarkMode }} />
                </main>
            </div>

        </>

    );
};

export default Layout;