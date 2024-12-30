//without image caption
import React, { useState } from 'react';
import './ImageCarousel2.css';

const ImageCarousel2 = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel-container">
            <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
            />
            <button className="carousel-button prev" onClick={prevImage}>
                &#10094;
            </button>
            <button className="carousel-button next" onClick={nextImage}>
                &#10095;
            </button>
        </div>
    );
};

export default ImageCarousel2;
