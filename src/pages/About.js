import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <img
                className="about-png-image"
                src="/about-Png.jpg"
                alt="Penang Bridge"
            />
            <div className='aboutText'>
                <h1>About Penang</h1>
                <p>This is the About page. Content will be added later.</p>
            </div>
        </div>
    );
};

export default About;