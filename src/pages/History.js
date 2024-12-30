import React from 'react';
import './history.css';

const History = () => {
    return (
        <section className="history-container">
            <div className="container1">
                <img 
                    src="/Street_art_1.png" 
                    alt="Penang Street Art 1" 
                    className="container-image" 
                />
            </div>
            <div className="container2">
                <img 
                    src="/Street_art_2.png" 
                    alt="Penang Street Art 2" 
                    className="container-image" 
                />
                <div className="text-content">
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
            </div>
            <div className="container3">
                <img 
                    src="/Street_art_3.png" 
                    alt="Penang Street Art 3" 
                    className="container-image" 
                />
            </div>
        </section>
    );
};

export default History;
