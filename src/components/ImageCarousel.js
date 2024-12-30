import React, { useState } from 'react';
import './ImageCarousel.css'; // Keep this CSS file

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigation = (direction) => {
        setCurrentIndex((prevIndex) =>
            direction === 'next'
                ? (prevIndex + 1) % images.length
                : (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="image-carousel">
            <div className="image-container">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="carousel-image"
                />
                <div className="image-caption">{images[currentIndex].caption}</div>
                <button
                    className="nav-button prev-button"
                    onClick={() => handleNavigation('prev')}
                >
                    &#9664;
                </button>
                <button
                    className="nav-button next-button"
                    onClick={() => handleNavigation('next')}
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
