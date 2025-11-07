import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Genre {
    mal_id: number;
    name: string;
    count: number;
}

const Genres: React.FC = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const res = await fetch("https://api.jikan.moe/v4/genres/anime");
                const data = await res.json();
                setGenres(data.data || []);
            } catch (err) {
                console.error("Error fetching genres:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchGenres();
    }, []);

    return (
        <div className="py-12 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Pilih Genre Anime</h1>

            {loading ? (
                <p className="text-center text-gray-500">Memuat daftar genre...</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {genres.map((genre) => (
                        <Link key={genre.mal_id} to={`/genre/${genre.mal_id}`} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:bg-blue-50 p-4 text-center transition">
                            <h2 className="font-semibold text-gray-700">{genre.name}</h2>
                            <p className="text-sm text-gray-500">{genre.count} anime</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Genres;
