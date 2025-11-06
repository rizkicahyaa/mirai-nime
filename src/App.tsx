import "./App.css";
import Navbar from "./components/Navbar";
import AnimeSearch from "./components/AnimeSearch";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <AnimeSearch />
        </div>
    );
}

export default App;
