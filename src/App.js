import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import TouristSpot from './pages/TouristSpot';
import Georgetown from './pages/touristspot/georgetown';
import Beaches from './pages/touristspot/beaches';
import Cultural from './pages/touristspot/cultural';
import Nature from './pages/touristspot/nature';
import Museum from './pages/touristspot/museum';
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
            <Routes>
                {/* Main Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/tourist-spot" element={<TouristSpot />} />
                <Route path="/food" element={<Food />} />
                <Route path="/history" element={<History />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/transportation" element={<Transportation />} />
                <Route path="/weather" element={<Weather />} />

                {/* Sub-routes for Tourist Spot Sections */}
                <Route path="/tourist-spot/georgetown" element={<Georgetown />} />
                <Route path="/tourist-spot/beaches" element={<Beaches />} />
                <Route path="/tourist-spot/cultural" element={<Cultural />} />
                <Route path="/tourist-spot/nature" element={<Nature />} />
                <Route path="/tourist-spot/museum" element={<Museum />} />
            </Routes>
        </Router>
    );
};

export default App;
