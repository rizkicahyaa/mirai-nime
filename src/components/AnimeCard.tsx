import React from "react";
import { Link } from "react-router-dom";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
}

const AnimeCard: React.FC<{ anime: Anime }> = ({ anime }) => (
    <Link to={`/anime/${anime.mal_id}`} className="group block backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:border-amber-400/50">
        <div className="relative overflow-hidden">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 text-center bg-gradient-to-b from-white/10 to-white/5">
            <h2 className="text-sm font-semibold text-white line-clamp-2 group-hover:text-amber-300 transition-colors duration-300">{anime.title}</h2>
            <p className="text-xs text-amber-400 font-medium mt-2 flex items-center justify-center gap-1">
                <span className="text-amber-300">⭐</span> 
                <span className="text-amber-200">{anime.score !== null && anime.score !== undefined ? anime.score : "N/A"}</span>
            </p>
        </div>
    </Link>
);

export default AnimeCard;
