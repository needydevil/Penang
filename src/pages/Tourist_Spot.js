import React from 'react';
import './Tourist_Spot.css';

const Tourist_Spot = () => {
    return (
        <div className="tourist-spot-page">
            <div className="tourist-spot-banner">
                <div className="tourist-spot-overlay">
                    <h1 className="tourist-spot-intro-title">Penang</h1>
                    <p className="tourist-spot-intro-description">
                        A place of cultural heritage, stunning beaches, and natural beauty that makes Penang a unique destination.
                    </p>
                </div>
            </div>
            {/* Added box for visit places */}
            <div className="visit-places-box">
                <h2>Visit Places</h2>
                <br />
                <div className="visit-places-options">
                    <div className="visit-place">
                        <span>🏙️</span> George Town
                    </div>
                    <div className="visit-place">
                        <span>🏖️</span> Beaches
                    </div>
                    <div className="visit-place">
                        <span>🏯</span> Cultural & Religious Sites
                    </div>
                    <div className="visit-place">
                        <span>🌳</span> Nature
                    </div>
                    <div className="visit-place">
                        <span>🎭</span> Museums & Entertainment
                    </div>
                </div>
            </div>

            {/* Georgetown Section */}
            <div className="georgetown-section">
                <h2>Georgetown</h2>
                <p className="georgetown-description">
                    Explore the UNESCO World Heritage site with its iconic street art, historical landmarks, and vibrant culture.
                </p>
                <div className="georgetown-images">
                    <img src="/Penang-Street-Art.jpg" alt="Georgetown 1" />
                    <img src="/cheongfatttzemansion.jpg" alt="Georgetown 2" />
                    <img src="/peranakanmansion.jpg" alt="Georgetown 3" />
                </div>
                <button className="view-more-button">View More</button>
            </div>
        </div>
    );
};

export default Tourist_Spot;
