import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Full-screen Video */}
            <div className="video-container">
                <video
                    className="background-video"
                    autoPlay
                    muted
                >
                    <source src="/homepage.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h1>Welcome to Areca</h1>
                    <p>
                        Your gateway to Penang's rich culture, stunning landscapes, and vibrant attractions. 
                        Explore its history, cuisine, and hidden gems with Areca as your guide.
                    </p>
                    <a href="/about">
                        <button className="start-discovering-button">Start Discovering </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
