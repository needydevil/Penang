import React from 'react';
import './history.css'; 

const History = () => {
    return (
        <section className="hero-container">
            <div className="hero-background">
                <img 
                    src="/street_art.png" 
                    alt="Penang Illustration" 
                    className="hero-image" 
                />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span>PENANG</span>
                    <br />
                    History and Culture
                </h1>
                <p className="hero-description">
                    Look deep into culture, and you will understand everything better.
                </p>
                <button className="hero-button">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default History;
