import React, { useState } from 'react';
import './georgetown.css';

const Georgetown = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { id: 1, src: '/kekloksitemple2.jpeg', alt: 'Kek Lok Si Temple', caption: 'Kek Lok Si Temple at Night' },
        { id: 2, src: '/streetart2.jpg', alt: 'Street Art', caption: 'Iconic Street Art of Georgetown' },
        { id: 3, src: '/cheongfatttzemansion.jpg', alt: 'Cheong Fatt Tze Mansion', caption: 'Cheong Fatt Tze Mansion' },
    ];

    const handleNavigation = (direction) => {
        setCurrentIndex((prevIndex) =>
            direction === 'next'
                ? (prevIndex + 1) % images.length
                : (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="georgetown-page">
            {/* Image Carousel */}
            <div className="form-container">
                <div className="image-container">
                    <img
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        className="form-image"
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

            {/* Title and Descriptions */}
            <div className="georgetown-description">
                <h1 className="georgetown-title">Georgetown</h1>
                <div className="georgetown-paragraph">
                    <h2>Kek Lok Si Temple</h2>
                    <p>
                        Nestled atop the hills of Air Itam, Kek Lok Si Temple stands as a majestic symbol of faith and harmony. Renowned as the largest Buddhist temple in Malaysia, it is a haven for spiritual reflection and architectural marvels. The temple showcases a blend of Chinese, Thai, and Burmese influences, featuring intricate carvings, vibrant murals, and statues that depict Buddhist teachings.
                        One of its most iconic features is the towering statue of the Goddess of Mercy, Kuan Yin, which rises gracefully against the backdrop of lush greenery. The highlight of any visit is during Chinese New Year, when the temple is illuminated with thousands of lights, creating a breathtaking spectacle. Visitors can also explore the Pagoda of Ten Thousand Buddhas, which combines Chinese, Thai, and Burmese styles, symbolizing unity in diversity.
                    </p>
                </div>
                <div className="georgetown-paragraph">
                    <h2>Penang Street Art</h2>
                    <p>
                        Georgetown's Penang Street Art is a living museum that breathes life into the city’s walls. This collection of murals and sculptures has transformed the historic streets into a vibrant open-air gallery. The initiative began in 2012 when Lithuanian artist Ernest Zacharevic painted a series of interactive murals as part of the George Town Festival. Since then, the streets have become a canvas for numerous local and international artists.
                        The most famous mural, "Children on a Bicycle," captures the charm of local life and invites visitors to interact with the artwork. Each mural tells a story of Penang’s culture, history, and everyday life, making it a perfect way to explore the city on foot or by bicycle. The art also reflects Georgetown’s UNESCO World Heritage status, preserving its historic essence while embracing modern creativity.
                    </p>
                </div>
                <div className="georgetown-paragraph">
                    <h2>Cheong Fatt Tze Mansion</h2>
                    <p>
                        The Cheong Fatt Tze Mansion, affectionately known as The Blue Mansion, is a testament to the opulence and vision of its namesake, Cheong Fatt Tze. Built in the late 19th century, this heritage building is a masterpiece of Chinese architecture, showcasing meticulous craftsmanship and timeless elegance. Its signature indigo-blue walls make it one of the most photographed landmarks in Penang.
                        Inside, visitors are greeted with intricate wooden carvings, colorful floor tiles imported from Europe, and open courtyards that reflect the feng shui principles. The mansion is not only a historical landmark but also a living space, housing a boutique hotel and hosting guided tours that delve into its rich history. Cheong Fatt Tze’s story, often referred to as the "Rockefeller of the East," adds an intriguing layer to this cultural gem, making it a must-visit for history enthusiasts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Georgetown;
