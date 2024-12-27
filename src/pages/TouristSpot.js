import React from 'react';
import './TouristSpot.css';

const TouristSpot = () => {
    return (
        <div className="tourist-spot-container">
            <div className="tourist-spot-image-container">
                <img
                    className="tourist-spot-image"
                    src="/tourist-spot.jpg" // Ensure the path is correct
                    alt="Penang Street"
                />
            </div>
            <div className="tourist-spot-content">
                <h1>Penang Island</h1>
                <p>
                    A place rich in history, culture, and natural beauty, Penang Island offers vibrant markets, iconic heritage sites, and ancient streets. This destination captures the essence of tradition while welcoming visitors with modern attractions, making it a must-visit location.
                </p>
                <button className="build-trip-button">
                    Start Discover
                </button>
                <p className="powered-by">Powered by AI</p>
            </div>
        </div>
    );
};

export default TouristSpot;