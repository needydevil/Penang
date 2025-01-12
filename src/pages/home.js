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

    const videoSrc = isMobile
        ? "https://www.youtube.com/embed/L_PECjvzgsk?autoplay=1&mute=1&loop=1&playlist=L_PECjvzgsk"
        : "https://www.youtube.com/embed/KeDSg4Y_njg?autoplay=1&mute=1&loop=1&playlist=KeDSg4Y_njg";

    return (
        <div className="home-page">
            {/* Full-screen Video */}
            <div className="video-container">
                <iframe
                    className="background-video"
                    src={videoSrc}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Background Video"
                ></iframe>
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