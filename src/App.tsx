import "./App.css";
import Navbar from "./components/Navbar";
import AnimeSearch from "./components/AnimeSearch";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <Navbar />
            <HeroSection />
            <AnimeSearch />
            <Footer />
        </div>
    );
}

export default App;
