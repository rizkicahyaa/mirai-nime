import "./App.css";
import Navbar from "./components/Navbar";
import AnimeSearch from "./components/AnimeSearch";
import HeroSection from "./components/HeroSection";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <HeroSection />
            <AnimeSearch />
        </div>
    );
}

export default App;
