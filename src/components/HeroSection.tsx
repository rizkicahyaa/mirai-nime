import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
    const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
    
    return (
        <section id="home" className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white py-24 px-6 overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("${patternUrl}")` }}></div>
            <div className="max-w-5xl text-center mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">Temukan Anime Favoritmu</h1>
                    <p className="text-lg text-purple-100 mb-8 font-light">Jelajahi ribuan judul anime dengan cepat dan mudah.</p>
                    <Link to="/search" className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-semibold px-8 py-3 rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 hover:scale-105 transform">
                        Mulai Cari
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
