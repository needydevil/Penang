import React, { useState } from 'react';
import './About.css';

const About = () => {
    // State for the carousel in the HOTELS section
    const [hotelIndex, setHotelIndex] = useState(0);

    // State for the carousel in the TRANSPORTATION section
    const [transportIndex, setTransportIndex] = useState(0);

    // Arrays of images for each section
    const hotelImages = [
        "/hotel1.png",
        "/hotel2.png",
        "/hotel3.png",
    ];

    const transportImages = [
        "/transport1.png",
        "/transport2.png",
        "/transport3.png",
    ];

    // Functions for the HOTELS section
    const prevHotelImage = () => {
        setHotelIndex((prevIndex) =>
            prevIndex === 0 ? hotelImages.length - 1 : prevIndex - 1
        );
    };

    const nextHotelImage = () => {
        setHotelIndex((prevIndex) =>
            prevIndex === hotelImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Functions for the TRANSPORTATION section
    const prevTransportImage = () => {
        setTransportIndex((prevIndex) =>
            prevIndex === 0 ? transportImages.length - 1 : prevIndex - 1
        );
    };

    const nextTransportImage = () => {
        setTransportIndex((prevIndex) =>
            prevIndex === transportImages.length - 1 ? 0 : prevIndex + 1
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

            {/* HOTELS Section */}
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
                        src={hotelImages[hotelIndex]}
                        alt={`Hotel Example ${hotelIndex + 1}`}
                    />
                </div>

                <div className="carousel">
                    <button className="carousel-button prev" onClick={prevHotelImage}>
                        &#10094;
                    </button>
                    <button className="carousel-button next" onClick={nextHotelImage}>
                        &#10095;
                    </button>
                </div>

                <div className="view-more-button-container">
                    <button className="view-more-button">
                        View More
                    </button>
                </div>
            </div>

            {/* TRANSPORTATION Section */}
            <div className="aboutPage-section">
                <div className="title-container">
                    <span className="line"></span>
                    <span className="symbol">◊</span>
                    <span className="line"></span>
                    <h1 className="title">TRANSPORTATIONS</h1>
                    <span className="line"></span>
                    <span className="symbol">◊</span>
                    <span className="line"></span>
                </div>

                <div className='section-image'>
                    <img
                        src={transportImages[transportIndex]}
                        alt={`Transportation Example ${transportIndex + 1}`}
                    />
                </div>

                <div className="carousel">
                    <button className="carousel-button prev" onClick={prevTransportImage}>
                        &#10094;
                    </button>
                    <button className="carousel-button next" onClick={nextTransportImage}>
                        &#10095;
                    </button>
                </div>

                <div className="view-more-button-container">
                    <button className="view-more-button">
                        View More
                    </button>
                </div>
            </div>

            {/* WEATHER Section */}
            <div className="aboutPage-section">
                <div className="title-container">
                    <span className="line"></span>
                    <span className="symbol">◊</span>
                    <span className="line"></span>
                    <h1 className="title">WEATHER</h1>
                    <span className="line"></span>
                    <span className="symbol">◊</span>
                    <span className="line"></span>
                </div>

                <div className='section-image'>
                    <img
                        src='/weather.png'
                        alt='Weather Example'
                    />
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
