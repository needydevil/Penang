import React from 'react';
import './georgetown.css';
import ImageCarousel from '../../components/ImageCarousel'; // Adjust path based on your file structure

const Georgetown = () => {
    const images = [
        { id: 1, src: '/peranakanmansion.jpg', alt: 'Pinang Peranakan Mansion', caption: 'Pinang Peranakan Mansion' },
        { id: 2, src: '/streetart2.jpg', alt: 'Street Art', caption: 'Iconic Street Art of Georgetown' },
        { id: 3, src: '/cheongfatttzemansion.jpg', alt: 'Cheong Fatt Tze Mansion', caption: 'Cheong Fatt Tze Mansion' },
    ];

    return (
        <div className="georgetown-page">
            {/* Image Carousel */}
            <div className="carousel-wrapper">
                <ImageCarousel images={images} />
            </div>

            {/* Title and Descriptions */}
            <div className="georgetown-description">
                <h1 className="georgetown-title">Georgetown</h1>
                <section className="georgetown-paragraph">
                    <h2>Penang Peranakan Mansion</h2>
                    <p> 
                        Located in the heart of George Town, the Pinang Peranakan Mansion is a stunning showcase of the Peranakan community's rich heritage. Its exquisite blend of Chinese and Malay influences is reflected in the intricate architecture, antique furnishings, and vibrant tiles. 
                    </p> 
                    <p> 
                        The mansion’s iconic courtyard and vast collection of antiques, jewelry, and traditional costumes offer a glimpse into the opulent lifestyle of the Straits Chinese. Visitors can explore its beautifully preserved spaces and immerse themselves in the unique culture of this fascinating community. 
                    </p>
                </section>

                <section className="georgetown-paragraph">
                    <h2>Penang Street Art</h2>
                    <p>
                        Georgetown's Penang Street Art is a living museum that breathes life into the city’s walls. This collection of murals and sculptures has transformed the historic streets into a vibrant open-air gallery. The initiative began in 2012 when Lithuanian artist Ernest Zacharevic painted a series of interactive murals as part of the George Town Festival. Since then, the streets have become a canvas for numerous local and international artists.
                    </p>
                    <p>
                        The most famous mural, "Children on a Bicycle," captures the charm of local life and invites visitors to interact with the artwork. Each mural tells a story of Penang’s culture, history, and everyday life, making it a perfect way to explore the city on foot or by bicycle. The art also reflects Georgetown’s UNESCO World Heritage status, preserving its historic essence while embracing modern creativity.
                    </p>
                </section>

                <section className="georgetown-paragraph">
                    <h2>Cheong Fatt Tze Mansion</h2>
                    <p>
                        The Cheong Fatt Tze Mansion, affectionately known as The Blue Mansion, is a testament to the opulence and vision of its namesake, Cheong Fatt Tze. Built in the late 19th century, this heritage building is a masterpiece of Chinese architecture, showcasing meticulous craftsmanship and timeless elegance. Its signature indigo-blue walls make it one of the most photographed landmarks in Penang.
                    </p>
                    <p>
                        Inside, visitors are greeted with intricate wooden carvings, colorful floor tiles imported from Europe, and open courtyards that reflect the feng shui principles. The mansion is not only a historical landmark but also a living space, housing a boutique hotel and hosting guided tours that delve into its rich history. Cheong Fatt Tze’s story, often referred to as the "Rockefeller of the East," adds an intriguing layer to this cultural gem, making it a must-visit for history enthusiasts.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Georgetown;
