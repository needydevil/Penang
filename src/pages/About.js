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

        </div>
    );
};

export default About;