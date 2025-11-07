import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";

interface Anime {
    mal_id: number;
    title: string;
    images: { jpg: { image_url: string } };
    score: number | null;
}

const GenreAnime: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [genreName, setGenreName] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimeByGenre = async () => {
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime?genres=${id}&limit=18`);
                const data = await res.json();
                setAnimeList(data.data || []);
                if (data.data?.length > 0) {
                    setGenreName(data.data[0].genres?.find((g: any) => g.mal_id.toString() === id)?.name || "");
                }
            } catch (err) {
                console.error("Error fetching anime by genre:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimeByGenre();
    }, [id]);

    return (
        <div className="py-12 px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">{genreName ? `Anime Genre ${genreName}` : "Memuat Genre..."}</h1>

            {loading ? (
                <p className="text-center text-gray-500">Memuat anime...</p>
            ) : animeList.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">Tidak ada anime untuk genre ini.</p>
            )}
        </div>
    );
};

export default GenreAnime;
