import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import TouristSpot from './pages/TouristSpot';
import Food from './pages/Food';
import History from './pages/History';
import Hotels from './pages/Hotels';
import Transportation from './pages/Transportation';
import Weather from './pages/Weather';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />

            {/* Define Routes for Different Pages */}
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/tourist-spot" element={<TouristSpot />} />
                <Route path="/food" element={<Food />} />
                <Route path="/history" element={<History />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/transportation" element={<Transportation />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </Router>
    );
};

export default App;
