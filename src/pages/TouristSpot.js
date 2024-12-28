import React from 'react';
import './TouristSpot.css';
import VisitPlaces from '../components/VisitPlaces';

const TouristSpot = () => {
    return (
        <div className="tourist-spot-page">
            {/* Section 1: Main Tourist Spot */}
            <div className="tourist-spot-container">
                <div className="tourist-spot-image-container">
                    <img
                        className="tourist-spot-image"
                        src="/tourist-spot2.png"
                        alt="Penang Street"
                    />
                </div>
                <div className="tourist-spot-content">
                    <h1>Penang Island</h1>
                    <p>
                        A place rich in history, culture, and natural beauty, Penang Island offers vibrant markets,
                        iconic heritage sites, and ancient streets. This destination captures the essence of tradition
                        while welcoming visitors with modern attractions, making it a must-visit location.
                    </p>
                    <button className="start-discovering-button">
                        Start Discovering
                    </button>
                </div>
            </div>

            {/* Section 2: Visit Places */}
            <VisitPlaces />

            {/* Section 3: Georgetown Highlights */}
            <div className="section-3">
                <div className="section-3-header">
                    <h2>Georgetown</h2>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="/penangstreet.jpg" alt="Penang Street Art" className="card-image" />
                        <div className="card-content">
                            <h3>Penang Street Art</h3>
                            <p>Streets that breathe life into walls, narrating captivating cultural stories through vibrant murals.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/peranakanmansion.jpg" alt="Pinang Peranakan Mansion" className="card-image" />
                        <div className="card-content">
                            <h3>Pinang Peranakan Mansion</h3>
                            <p>A museum showcasing the rich history and heritage of the Peranakans in Penang.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cheongfatttzemansion.jpg" alt="Cheong Fatt Tze Mansion" className="card-image" />
                        <div className="card-content">
                            <h3>Cheong Fatt Tze Mansion</h3>
                            <p>The iconic Blue Mansion of Georgetown offering cultural tours and luxurious stays.</p>
                        </div>
                    </div>
                </div>
                {/* View More Button */}
                <div className="view-more-button-container">
                    <button className="view-more-button">View More</button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
