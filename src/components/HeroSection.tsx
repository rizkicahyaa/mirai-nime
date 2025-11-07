import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6">
            <div className="max-w-5xl text-center mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Temukan Anime Favoritmu</h1>
                    <p className="text-lg text-blue-100 mb-6">Jelajahi ribuan judul anime dengan cepat dan mudah.</p>
                    <Link to="/search" className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                        Mulai Cari
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
