import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">MiraiNime</h1>
                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <a href="#home" className="hover:text-blue-500">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#search" className="hover:text-blue-500">
                            Search
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-blue-500">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
