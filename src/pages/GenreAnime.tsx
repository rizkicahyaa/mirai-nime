import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Anime {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
    score?: number | null;
}

const Genre: React.FC = () => {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [searchParams] = useSearchParams();
    const genreId = searchParams.get("id") || "1";

    useEffect(() => {
        const fetchGenreAnime = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime?genres=${genreId}&page=${page}`);
                const data = await response.json();
                setAnimeList(data.data || []);
            } catch (error) {
                console.error("Error fetching anime by genre:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGenreAnime();
    }, [genreId, page]);

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Genre Anime</h1>

            {loading ? (
                <p className="text-center text-gray-600">Loading...</p>
            ) : animeList.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {animeList.map((anime) => (
                        <div key={anime.mal_id} className="bg-white rounded-lg shadow hover:shadow-md transition p-3">
                            <img src={anime.images.jpg.image_url} alt={anime.title} className="rounded-md w-full h-64 object-cover" />
                            <h3 className="text-sm font-semibold mt-2 text-gray-800 truncate">{anime.title}</h3>
                            <p className="text-sm text-yellow-600 font-medium mt-1">⭐ {anime.score !== null && anime.score !== undefined ? anime.score.toFixed(1) : "N/A"}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">Tidak ada anime untuk genre ini.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button disabled={page === 1} onClick={() => setPage(page - 1)} className={`px-4 py-2 rounded-lg ${page === 1 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 transition"}`}>
                    Prev
                </button>
                <span className="font-medium text-gray-700">Page {page}</span>
                <button onClick={() => setPage(page + 1)} className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Genre;
