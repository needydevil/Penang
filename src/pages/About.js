import React from 'react';
import './About.css';
import ImageCarousel2 from '../components/ImageCarousel2';

const About = () => {
    // Arrays of images for each section
    const hotelImages = [
        { src: "/hotel1.png", alt: "Hotel Example 1" },
        { src: "/hotel2.png", alt: "Hotel Example 2" },
        { src: "/hotel3.png", alt: "Hotel Example 3" },
    ];

    const transportImages = [
        { src: "/transport1.png", alt: "Transportation Example 1" },
        { src: "/transport2.png", alt: "Transportation Example 2" },
        { src: "/transport3.png", alt: "Transportation Example 3" },
    ];

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

                <ImageCarousel2 images={hotelImages} />

                <div className="about-view-more-button-container">
                    <a href='/Hotels'>
                        <button className="about-view-more-button">
                            View More
                        </button>
                    </a>
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

                <ImageCarousel2 images={transportImages} />

                <div className="about-view-more-button-container">
                    <a href='/Transportation'>
                        <button className="about-view-more-button">
                            View More
                        </button>
                    </a>
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

                <div className="about-view-more-button-container">
                    <a href='/Weather'>
                        <button className="about-view-more-button">
                            View More
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
