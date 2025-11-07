import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
}

const Home: React.FC = () => {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopAnime = async () => {
            try {
                const res = await fetch("https://api.jikan.moe/v4/top/anime?limit=10");
                const data = await res.json();
                setAnimeList(data.data || []);
            } catch (error) {
                console.error("Error fetching top anime:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTopAnime();
    }, []);

    return (
        <div className="py-12 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔥 Rekomendasi Anime Terbaik</h1>

            {loading ? (
                <p className="text-center text-gray-500">Memuat data anime...</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
