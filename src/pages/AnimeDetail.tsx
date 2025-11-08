import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface AnimeDetail {
    mal_id: number;
    title: string;
    synopsis: string;
    type: string;
    episodes: number;
    score: number | null;
    status: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

const AnimeDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [anime, setAnime] = useState<AnimeDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimeDetail = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
                const data = await response.json();
                setAnime(data.data);
            } catch (error) {
                console.error("Error fetching anime detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimeDetail();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <p className="text-gray-600 text-lg">Loading...</p>
            </div>
        );
    }

    if (!anime) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <p className="text-gray-600 text-lg">Anime tidak ditemukan.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full md:w-1/3 object-cover" />
                    <div className="p-6 md:w-2/3">
                        <h1 className="text-3xl font-bold text-blue-600 mb-3">{anime.title}</h1>
                        <p className="text-gray-700 mb-4 text-justify">{anime.synopsis}</p>
                        <div className="grid grid-cols-2 gap-4 text-gray-800">
                            <p>
                                <span className="font-semibold">Type:</span> {anime.type || "N/A"}
                            </p>
                            <p>
                                <span className="font-semibold">Episodes:</span> {anime.episodes || "?"}
                            </p>
                            <p>
                                <span className="font-semibold">Status:</span> {anime.status || "Unknown"}
                            </p>
                            <p>
                                <span className="font-semibold">Rating:</span> {anime.score !== null && anime.score !== undefined ? anime.score : "N/A"}
                            </p>
                        </div>
                        <div className="mt-6">
                            <Link to="/" className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition">
                                ← Kembali
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;
