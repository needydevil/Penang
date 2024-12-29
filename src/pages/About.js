import React from 'react';
import './About.css';

const About = () => {
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
                <div class="title-container">
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
                        src="/hotel1.png"
                        alt="Hotel Example 1"
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