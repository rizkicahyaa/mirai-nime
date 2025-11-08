import React from "react";
import { Link } from "react-router-dom";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
}

const AnimeCard: React.FC<{ anime: Anime }> = ({ anime }) => (
    <Link to={`/anime/${anime.mal_id}`} className="block bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300">
        <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover" />
        <div className="p-3 text-center">
            <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">{anime.title}</h2>
            <p className="text-xs text-yellow-600 font-medium mt-1">⭐ {anime.score !== null && anime.score !== undefined ? anime.score : "N/A"}</p>
        </div>
    </Link>
);

export default AnimeCard;
