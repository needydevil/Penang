import React, { useState } from 'react';
import './About.css';

const About = () => {
    // State for the carousel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of images for the carousel
    const images = [
        "/hotel1.png",
        "/hotel2.png",
        "/hotel3.png",
    ];

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="about-penang-page">
            <div className='about'>
                <img
                    className="about-png-image"
                    src="/about-Png.jpg"
                    alt="Penang Bridge"
                />
                <div className='aboutText'>
                    <h1>About Penang</h1>
                    <p>Penang is a popular destination in Malaysia known for its rich culture, history, and beautiful landscapes. It offers a variety of accommodations, from luxurious hotels to affordable stays. Getting around is easy with options like taxis, buses, and ride-hailing services. The island enjoys a tropical climate, with warm temperatures year-round, and experiences a rainy season from May to October.</p>
                </div>
            </div>

            <div className="aboutPage-section">
                <div className="title-container">
                    <span className="line"></span>
                    <span className="symbol">◊</span>
                    <span className="line"></span>
                    <h1 className="title">HOTELS</h1>
                    <span className="line"></span>
                    <span className="symbol">◊</span>
                    <span className="line"></span>
                </div>

                <div className='section-image'>
                    <img
                        src={images[currentIndex]}
                        alt={`Hotel Example ${currentIndex + 1}`}
                    />
                </div>

                <div className="carousel">
                    <button className="carousel-button prev" onClick={prevImage}>
                        &#10094;
                    </button>
                    <button className="carousel-button next" onClick={nextImage}>
                        &#10095;
                    </button>
                </div>

                <div className="view-more-button-container">
                    <button className="view-more-button">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
