import React from "react";

const About: React.FC = () => {
    const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

    return (
        <div className="min-h-screen">
            <section className="relative text-white py-24 px-6 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("/background.jpg")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-purple-900/80"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url("${patternUrl}")` }}></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
                        Tentang MiraiNime
                    </h1>
                    <p className="text-xl text-purple-100 font-light">
                        Platform pencarian dan penemuan anime terbaik untuk para penggemar anime
                    </p>
                </div>
            </section>

            <div className="py-16 px-6 max-w-4xl mx-auto">
                <div className="space-y-12">
                    <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                            Misi Kami
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            MiraiNime hadir untuk memudahkan para penggemar anime dalam menemukan dan menjelajahi 
                            berbagai judul anime terbaik. Kami menyediakan akses mudah ke informasi lengkap tentang 
                            anime, mulai dari rating, sinopsis, hingga detail karakter yang Anda cari.
                        </p>
                    </section>

                    <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                            Fitur Utama
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h3 className="text-xl font-semibold text-amber-300 mb-3">🔍 Pencarian Cepat</h3>
                                <p className="text-white/70">
                                    Cari anime favorit Anda dengan mudah menggunakan fitur pencarian yang cepat dan akurat.
                                </p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h3 className="text-xl font-semibold text-amber-300 mb-3">⭐ Rating & Review</h3>
                                <p className="text-white/70">
                                    Lihat rating dan review dari komunitas untuk membantu Anda memilih anime terbaik.
                                </p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h3 className="text-xl font-semibold text-amber-300 mb-3">📚 Katalog Lengkap</h3>
                                <p className="text-white/70">
                                    Akses ke ribuan judul anime dengan informasi lengkap dan terupdate.
                                </p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                                <h3 className="text-xl font-semibold text-amber-300 mb-3">🎯 Rekomendasi</h3>
                                <p className="text-white/70">
                                    Dapatkan rekomendasi anime terbaik berdasarkan popularitas dan rating tinggi.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl text-center">
                        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                            Hubungi Kami
                        </h2>
                        <p className="text-white/80 text-lg mb-6">
                            Ada saran atau pertanyaan? Kami siap membantu Anda!
                        </p>
                        <p className="text-white/60">
                            Email: info@mirainime.com
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;

