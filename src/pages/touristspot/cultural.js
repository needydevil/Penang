import React from 'react';
import './cultural.css';
import ImageCarousel from '../../components/ImageCarousel'; // Adjust path based on your file structure

const Cultural = () => {
    const images = [
        { id: 1, src: '/kekloksitemple2.jpeg', alt: 'Kek Lok Si Temple', caption: 'Kek Lok Si Temple at Night' },
        { id: 2, src: '/kapitankeling.jpeg', alt: 'Kapitan Keling Mosque', caption: 'Kapitan Keling Mosque' },
        { id: 3, src: '/khookongsi.jpeg', alt: 'Khoo Kongsi', caption: 'Khoo Kongsi Clan House' },
    ];

    return (
        <div className="cultural-page">
            {/* Image Carousel */}
            <div className="carousel-wrapper">
                <ImageCarousel images={images} />
            </div>

            {/* Title and Descriptions */}
            <div className="cultural-description">
                <h1 className="cultural-title">Cultural Heritage</h1>
                <section className="cultural-paragraph">
                    <h2>Kek Lok Si Temple</h2>
                    <p>
                        Nestled atop the hills of Air Itam, Kek Lok Si Temple stands as a majestic symbol of faith and harmony. Renowned as the largest Buddhist temple in Malaysia, it is a haven for spiritual reflection and architectural marvels. The temple showcases a blend of Chinese, Thai, and Burmese influences, featuring intricate carvings, vibrant murals, and statues that depict Buddhist teachings.
                    </p>
                    <p>
                        One of its most iconic features is the towering statue of the Goddess of Mercy, Kuan Yin, which rises gracefully against the backdrop of lush greenery. During Chinese New Year, the temple is adorned with thousands of lights, creating a breathtaking spectacle that symbolizes hope and prosperity. 
                    </p>
                </section>

                <section className="cultural-paragraph">
                    <h2>Kapitan Keling Mosque</h2>
                    <p>
                        The Kapitan Keling Mosque is a hallmark of Georgetown’s Islamic heritage. Built in the early 19th century by Penang’s Indian Muslim community, the mosque features stunning Mughal-inspired architecture, complete with a large central dome, elegant arches, and towering minarets. Its whitewashed exterior and golden dome stand as a beacon of faith and cultural pride.
                    </p>
                    <p>
                        Visitors are welcome to explore the mosque grounds, where they can learn about Islamic traditions and the history of Penang’s diverse communities. The mosque’s serene atmosphere makes it a perfect place for quiet reflection, while its intricate designs showcase the artistry of Islamic architecture.
                    </p>
                </section>

                <section className="cultural-paragraph">
                    <h2>Khoo Kongsi</h2>
                    <p>
                        Khoo Kongsi is one of the grandest clan houses in Malaysia, epitomizing the rich cultural heritage of Penang’s Chinese community. Located in the heart of Georgetown, this clan house is an architectural masterpiece, adorned with elaborate carvings, colorful murals, and intricate tiled roofs that reflect the prosperity and legacy of the Khoo clan.
                    </p>
                    <p>
                        Visitors can wander through its grand halls and open courtyards, which serve as a hub for family gatherings and cultural events. The detailed depictions of Chinese folklore and historical events etched into its walls offer a glimpse into the rich traditions of the Chinese diaspora in Penang. Khoo Kongsi stands as a testament to the enduring spirit of unity and heritage among Penang’s Chinese clans.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Cultural;
