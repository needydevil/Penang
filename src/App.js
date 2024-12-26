import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import TouristSpot from './pages/TouristSpot';
import Food from './pages/Food';
import History from './pages/History';
import Hotels from './pages/Hotels'; // New page
import Transportation from './pages/Transportation'; // New page
import Weather from './pages/Weather'; // New page
import Navbar from './components/Navbar';

const App = () => {
    const [spots, setSpots] = useState(['Penang Hill', 'Kek Lok Si Temple', 'Batu Ferringhi']);

    const addSpot = () => {
        const newSpot = prompt('Enter a new tourist spot:');
        if (newSpot) setSpots([...spots, newSpot]);
    };

    return (
        <Router>
            <Navbar />
            <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '20px' }}>
                <h1>Welcome to Penang!</h1>
                <p>Explore the beauty and culture of Penang.</p>

                {/* Display Tourist Spots */}
                <h2>Tourist Spots</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {spots.map((spot, index) => (
                        <li key={index} style={{ margin: '10px 0', fontSize: '18px' }}>
                            🏞️ {spot}
                        </li>
                    ))}
                </ul>

                {/* Button to Add New Tourist Spot */}
                <button
                    onClick={addSpot}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        marginTop: '20px',
                    }}
                >
                    Add Tourist Spot
                </button>
            </div>

            {/* Define Routes for Different Pages */}
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/tourist-spot" element={<TouristSpot />} />
                <Route path="/food" element={<Food />} />
                <Route path="/history" element={<History />} />
                <Route path="/hotels" element={<Hotels />} /> {/* New route */}
                <Route path="/transportation" element={<Transportation />} /> {/* New route */}
                <Route path="/weather" element={<Weather />} /> {/* New route */}
            </Routes>
        </Router>
    );
};

export default App;