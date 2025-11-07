import React, { useState } from "react";
import AnimeCard from "../components/AnimeCard";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
}

const Search: React.FC = () => {
    const [query, setQuery] = useState("");
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);

    const searchAnime = async () => {
        if (!query.trim()) return;
        setLoading(true);
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=12`);
            const data = await res.json();
            setAnimeList(data.data || []);
        } catch (error) {
            console.error("Error fetching anime:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-12 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔎 Cari Anime</h1>

            <div className="flex justify-center mb-8">
                <input type="text" placeholder="Masukkan nama anime..." className="border border-gray-300 rounded-l-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && searchAnime()} />
                <button onClick={searchAnime} className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600">
                    Cari
                </button>
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Sedang mencari...</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>
            )}

            {!loading && animeList.length === 0 && <p className="text-center text-gray-400 mt-6">Masukkan nama anime untuk mulai mencari.</p>}
        </div>
    );
};

export default Search;
