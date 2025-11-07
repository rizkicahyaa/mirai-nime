import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">MiraiNime</h1>

                <ul className="flex space-x-6 text-gray-700 font-medium">
                    <li>
                        <Link to="/" className={`hover:text-blue-500 ${pathname === "/" ? "text-blue-600 font-semibold" : ""}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className={`hover:text-blue-500 ${pathname === "/search" ? "text-blue-600 font-semibold" : ""}`}>
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/genres" className={`hover:text-blue-500 ${pathname === "/genres" ? "text-blue-600 font-semibold" : ""}`}>
                            Genre
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
