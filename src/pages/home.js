import React, { useEffect, useState } from 'react';
import './home.css';

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Set video source based on device type (Mobile/Desktop)
    const videoSrc = isMobile
        ? "/homepage.mp4" // Replace with the path to your mobile version video
        : "/homepage.mp4"; // Replace with the path to your desktop version video

    return (
        <div className="home-page">
            {/* Full-screen Video */}
            <div className="video-container">
                <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h1>Welcome to Areca</h1>
                    <p>
                        Your gateway to Penang's rich culture, stunning landscapes, and vibrant attractions.
                        Explore its history, cuisine, and hidden gems with Areca as your guide.
                    </p>
                    <a href="/about">
                        <button className="start-discovering-button">Start Discovering</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
