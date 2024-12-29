import React, { useState } from 'react';
import './georgetown.css';

const Georgetown = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { id: 1, src: '/kekloksitemple2.jpeg', alt: 'Kek Lok Si Temple', caption: 'Kek Lok Si Temple at Night' },
        { id: 2, src: '/streetart2.jpg', alt: 'Street Art', caption: 'Iconic Street Art of Georgetown' },
        { id: 3, src: '/cheongfatttzemansion.jpg', alt: 'Cheong Fatt Tze Mansion', caption: 'Cheong Fatt Tze Mansion' },
    ];

    // Handle navigation
    const handleNavigation = (direction) => {
        setCurrentIndex((prevIndex) =>
            direction === 'next'
                ? (prevIndex + 1) % images.length
                : (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="form-container">
            {/* Image Display */}
            <div className="image-container">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="form-image"
                />
                <div className="image-caption">{images[currentIndex].caption}</div>
                {/* Navigation Buttons */}
                <button
                    className="nav-button prev-button"
                    onClick={() => handleNavigation('prev')}
                >
                    &#9664; {/* Left triangle arrow */}
                </button>
                <button
                    className="nav-button next-button"
                    onClick={() => handleNavigation('next')}
                >
                    &#9654; {/* Right triangle arrow */}
                </button>
            </div>
        </div>
    );
};

export default Georgetown;
