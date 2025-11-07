import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100 font-sans">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
