import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Genre {
    mal_id: number;
    name: string;
}

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
    genres: Genre[];
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
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-white/60 text-lg">Loading...</p>
            </div>
        );
    }

    if (!anime) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-white/60 text-lg">Anime tidak ditemukan.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-10 px-6">
            <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden">
                <div className="md:flex">
                    <div className="relative w-full md:w-1/3 overflow-hidden">
                        <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-purple-900/30"></div>
                    </div>
                    <div className="p-8 md:w-2/3 bg-gradient-to-br from-white/10 to-white/5">
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent mb-4 drop-shadow-lg">{anime.title}</h1>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {anime.genres && anime.genres.length > 0 ? (
                                anime.genres.map((genre) => (
                                    <span key={genre.mal_id} className="backdrop-blur-sm bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                                        {genre.name}
                                    </span>
                                ))
                            ) : (
                                <span className="text-white/50 text-sm">No genres available</span>
                            )}
                        </div>

                        <p className="text-white/80 mb-6 text-justify leading-relaxed">{anime.synopsis}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4">
                            <p className="text-white/90">
                                <span className="font-semibold text-amber-300">Type:</span> <span className="text-white/70">{anime.type || "N/A"}</span>
                            </p>
                            <p className="text-white/90">
                                <span className="font-semibold text-amber-300">Episodes:</span> <span className="text-white/70">{anime.episodes || "?"}</span>
                            </p>
                            <p className="text-white/90">
                                <span className="font-semibold text-amber-300">Status:</span> <span className="text-white/70">{anime.status || "Unknown"}</span>
                            </p>
                            <p className="text-white/90">
                                <span className="font-semibold text-amber-300">Rating:</span> <span className="text-amber-300 font-semibold">{anime.score !== null && anime.score !== undefined ? anime.score : "N/A"}</span>
                            </p>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <Link to="/" className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 font-semibold px-6 py-2.5 rounded-xl hover:from-amber-400 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-500/60 hover:scale-105 transform">
                                Kembali
                            </Link>
                            <a href={`https://myanimelist.net/anime/${anime.mal_id}`} target="_blank" rel="noopener noreferrer" className="inline-block backdrop-blur-sm bg-white/10 text-white border border-white/20 px-6 py-2.5 rounded-xl hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Lihat di MyAnimeList
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;
