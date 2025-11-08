import React, { useState } from "react";
import AnimeCard from "../components/AnimeCard";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
    genres: { name: string }[];
    explicit_genres?: { name: string }[];
}

const Search: React.FC = () => {
    const [query, setQuery] = useState("");
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(false);
    const [filteredCount, setFilteredCount] = useState(0);

    const searchAnime = async () => {
        if (!query.trim()) return;
        setLoading(true);
        try {
            const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=20`);
            const data = await res.json();

            const filtered = (data.data || []).filter((anime: Anime) => {
                const genreNames = anime.genres.map((g) => g.name.toLowerCase());
                const isExplicit = anime.explicit_genres && anime.explicit_genres.length > 0;
                return !genreNames.includes("hentai") && !isExplicit;
            });

            setAnimeList(filtered);
            setFilteredCount((data.data?.length || 0) - filtered.length);
        } catch (error) {
            console.error("Error fetching anime:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-12 px-6 max-w-6xl mx-auto min-h-screen">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent mb-8 text-center drop-shadow-lg">Cari Anime</h1>

            <div className="flex justify-center mb-10">
                <div className="flex items-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20">
                    <input type="text" placeholder="Masukkan nama anime..." className="bg-transparent text-white placeholder-white/50 rounded-l-xl p-3 w-72 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:bg-white/5 transition-all duration-300" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && searchAnime()} />
                    <button onClick={searchAnime} className="bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-r-xl hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60">
                        Cari
                    </button>
                </div>
            </div>

            {loading ? (
                <p className="text-center text-white/60 text-lg">Sedang mencari...</p>
            ) : (
                <>
                    {filteredCount > 0 && <p className="text-center text-xs text-white/50 mb-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg px-4 py-2 inline-block">{filteredCount} hasil tidak ditampilkan karena mengandung konten dewasa.</p>}

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-start">
                        {animeList.map((anime) => (
                            <AnimeCard key={anime.mal_id} anime={anime} />
                        ))}
                    </div>

                    {!loading && animeList.length === 0 && <p className="text-center text-white/50 mt-8 text-lg">Masukkan nama anime untuk mulai mencari.</p>}
                </>
            )}
        </div>
    );
};

export default Search;
