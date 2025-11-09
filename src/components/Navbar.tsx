import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-2xl">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">MiraiNime</h1>

                <ul className="flex space-x-8 text-white/90 font-medium">
                    <li>
                        <Link to="/" className={`relative transition-all duration-300 hover:text-amber-300 ${pathname === "/" ? "text-amber-400 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-yellow-300" : ""}`}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/search" className={`relative transition-all duration-300 hover:text-amber-300 ${pathname === "/search" ? "text-amber-400 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-yellow-300" : ""}`}>
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={`relative transition-all duration-300 hover:text-amber-300 ${pathname === "/about" ? "text-amber-400 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-yellow-300" : ""}`}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
