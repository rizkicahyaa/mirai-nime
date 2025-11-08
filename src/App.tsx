import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import AnimeDetail from "./pages/AnimeDetail";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">
                <Navbar />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/anime/:id" element={<AnimeDetail />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
