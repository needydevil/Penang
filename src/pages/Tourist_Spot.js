import React from 'react';
import './Tourist_Spot.css';

// Reusable Tourist Section Component
const TouristSection = ({ id, title, description, images, className, link }) => {
    return (
        <div id={id} className={`tourist-section ${className}`}>
            <h2>{title}</h2>
            <p className="tourist-description">{description}</p>
            <div className="tourist-images">
                {images.map((img, index) => (
                    <img key={index} src={img.src} alt={img.alt} />
                ))}
            </div>
            <a href={link} className="view-more-button">
                View More
            </a>
        </div>
    );
};

const Tourist_Spot = () => {
    const sections = [
        {
            id: 'georgetown',
            title: 'Georgetown',
            description:
                'Explore the UNESCO World Heritage site with its iconic street art, historical landmarks, and vibrant culture.',
            images: [
                { src: '/Penang-Street-Art.jpg', alt: 'Georgetown 1' },
                { src: '/cheongfatttzemansion.jpg', alt: 'Georgetown 2' },
                { src: '/peranakanmansion.jpg', alt: 'Georgetown 3' },
            ],
            link: '/tourist-spot/georgetown',
        },
        {
            id: 'beaches',
            title: 'Beaches',
            description: 'Discover the breathtaking beaches of Penang, perfect for relaxation and water sports.',
            images: [
                { src: '/batuferringhi.jpeg', alt: 'Beach 1' },
                { src: '/tanjungbungah1.jpg', alt: 'Beach 2' },
                { src: '/MonkeyBeachTourfromPenang.jpg', alt: 'Beach 3' },
            ],
            link: '/tourist-spot/beaches',
        },
        {
            id: 'cultural-sites',
            title: 'Cultural & Religious Sites',
            description: 'Visit temples, mosques, and other cultural landmarks showcasing Penang’s heritage.',
            images: [
                { src: '/kekloksitemple.jpeg', alt: 'Temple 1' },
                { src: '/kapitankeling.jpeg', alt: 'Temple 2' },
                { src: '/khookongsi.jpeg', alt: 'Temple 3' },
            ],
            link: '/tourist-spot/cultural',
        },
        {
            id: 'nature',
            title: 'Nature',
            description: 'Experience Penang’s lush greenery, from national parks to botanical gardens.',
            images: [
                { src: '/penang_hill.jpg', alt: 'Nature 1' },
                { src: '/penangnationalpark.jpg', alt: 'Nature 2' },
                { src: '/Penang-Botanical-Gardens.jpg', alt: 'Nature 3' },
            ],
            link: '/tourist-spot/nature',
        },
        {
            id: 'museums-entertainment',
            title: 'Museums & Entertainment',
            description: 'Enjoy museums and entertainment hubs offering fun and knowledge for everyone.',
            images: [
                { src: '/penangstatemuseum.jpeg', alt: 'Museum 1' },
                { src: '/penangwarmuseum.jpg', alt: 'Museum 2' },
                { src: '/wonderfood.jpeg', alt: 'Museum 3' },
            ],
            link: '/tourist-spot/museum',
        },
    ];

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="tourist-spot-page">
            <div className="tourist-spot-banner">
                <div className="tourist-spot-overlay">
                    <h1 className="tourist-spot-intro-title">Penang</h1>
                    <p className="tourist-spot-intro-description">
                        A place of cultural heritage, stunning beaches, and natural beauty that makes Penang a unique destination.
                    </p>
                </div>
            </div>
            {/* Visit Places Box */}
            <div className="visit-places-box">
                <h2>Visit Places</h2>
                <br />
                <div className="visit-places-options">
                    <div className="visit-place" onClick={() => scrollToSection('georgetown')}>
                        <span>🏙️</span> George Town
                    </div>
                    <div className="visit-place" onClick={() => scrollToSection('beaches')}>
                        <span>🏖️</span> Beaches
                    </div>
                    <div className="visit-place" onClick={() => scrollToSection('cultural-sites')}>
                        <span>🏯</span> Cultural & Religious Sites
                    </div>
                    <div className="visit-place" onClick={() => scrollToSection('nature')}>
                        <span>🌳</span> Nature
                    </div>
                    <div className="visit-place" onClick={() => scrollToSection('museums-entertainment')}>
                        <span>🎭</span> Museums & Entertainment
                    </div>
                </div>
            </div>

            {/* Render Sections Dynamically */}
            {sections.map((section, index) => (
                <TouristSection
                    key={index}
                    id={section.id} // Pass id to the section
                    title={section.title}
                    description={section.description}
                    images={section.images}
                    link={section.link} // Pass the link to the section
                    className={index === 0 ? 'first-section' : ''} // Add className conditionally for styling
                />
            ))}
        </div>
    );
};

export default Tourist_Spot;
