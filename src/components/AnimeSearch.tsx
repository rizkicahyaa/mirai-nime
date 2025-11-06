import React, { useState } from "react";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
}

const AnimeSearch: React.FC = () => {
    const [query, setQuery] = useState("");
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);

    const searchAnime = async () => {
        if (!query.trim()) return;
        setLoading(true);
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`);
            const data = await res.json();
            setAnimeList(data.data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Anime Search</h1>

            <div className="flex justify-center mb-6">
                <input type="text" placeholder="Cari anime..." className="border border-gray-300 rounded-l-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && searchAnime()} />
                <button onClick={searchAnime} className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600">
                    Cari
                </button>
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Sedang mencari...</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {animeList.map((anime) => (
                        <div key={anime.mal_id} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
                            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-48 object-cover" />
                            <div className="p-2 text-center">
                                <h2 className="text-sm font-semibold">{anime.title}</h2>
                                <p className="text-xs text-gray-500">⭐ {anime.score ?? "N/A"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && animeList.length === 0 && <p className="text-center text-gray-400 mt-6">Masukkan nama anime untuk mulai mencari.</p>}
        </div>
    );
};

export default AnimeSearch;
