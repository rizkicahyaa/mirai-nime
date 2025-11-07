import React from "react";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
}

const AnimeCard: React.FC<{ anime: Anime }> = ({ anime }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
        <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover" />
        <div className="p-2 text-center">
            <h2 className="text-sm font-semibold">{anime.title}</h2>
            <p className="text-xs text-gray-500">⭐ {anime.score ?? "N/A"}</p>
        </div>
    </div>
);

export default AnimeCard;
