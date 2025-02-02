import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import TouristSpot from './pages/Tourist_Spot';
import Georgetown from './pages/touristspot/georgetown';
import Beaches from './pages/touristspot/beaches';
import Cultural from './pages/touristspot/cultural';
import Nature from './pages/touristspot/nature';
import Museum from './pages/touristspot/museum';
import Food from './pages/Food';
import HistoryCulture from './pages/HistoryCulture';
import Hotels from './pages/Hotels';
import Transportation from './pages/Transportation';
import Weather from './pages/Weather';
import Navbar from './components/Navbar';
import ChineseCulture from './pages/HistoryCulture/ChineseCulture';
import MalayCulture from './pages/HistoryCulture/MalayCulture';
import IndianCulture from './pages/HistoryCulture/IndianCulture';
import History from './pages/HistoryCulture/history';

// Create a Layout component to apply conditional styling
const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        // Apply conditional styles based on the current route
        if (location.pathname === '/') {
            document.body.style.overflow = 'hidden'; // Disable scrolling for the Home page
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling for other pages
        }
        // Cleanup on component unmount or route change
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [location]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Set Home as the root route */}
                {/* Main Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/tourist-spot" element={<TouristSpot />} />
                <Route path="/food" element={<Food />} />
                <Route path="/history-culture" element={<HistoryCulture />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/transportation" element={<Transportation />} />
                <Route path="/weather" element={<Weather />} />

                {/* Sub-routes for Tourist Spot Sections */}
                <Route path="/tourist-spot/georgetown" element={<Georgetown />} />
                <Route path="/tourist-spot/beaches" element={<Beaches />} />
                <Route path="/tourist-spot/cultural" element={<Cultural />} />
                <Route path="/tourist-spot/nature" element={<Nature />} />
                <Route path="/tourist-spot/museum" element={<Museum />} />

                {/* History and Culture Routes */}
                <Route path="/chinese-culture" element={<ChineseCulture />} />
                <Route path="/indian-culture" element={<IndianCulture />} />
                <Route path="/malay-culture" element={<MalayCulture />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Layout />
        </Router>
    );
};

export default App;
