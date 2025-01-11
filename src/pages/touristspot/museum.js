import React from 'react';
import './museum.css';
import ImageCarousel from '../../components/ImageCarousel'; // Adjust path based on your file structure
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Museum = () => {
    const navigate = useNavigate(); // Initialize navigate
    
    const images = [
        { id: 1, src: '/penang-state-museum-and-art-gallery-in-malaysia-photo.jpg', alt: 'Penang State Museum', caption: 'Penang State Museum' },
        { id: 2, src: '/penangwarmuseum.jpg', alt: 'Penang War Museum', caption: 'Penang War Museum' },
        { id: 3, src: '/Wonderfood-Museum-Penang-Collage.jpg', alt: 'Wonderfood Museum', caption: 'Wonderfood Museum' },
    ];

    return (
        <div className="museum-page">
            {/* Image Carousel */}
            <div className="carousel-wrapper">
                <ImageCarousel images={images} />
            </div>

            {/* Title and Descriptions */}
            <div className="museum-description">
                <h1 className="museum-title">Museums in Penang</h1>
                <section className="museum-paragraph">
                    <h2>Penang State Museum</h2>
                    <p>
                        The Penang State Museum, located in the heart of Georgetown, offers a fascinating journey into the history and culture of Penang. The museum is housed in a heritage building that exudes colonial charm, making it a historical landmark in itself. Inside, visitors will find an extensive collection of artifacts, photographs, and exhibits that tell the story of Penang’s rich multicultural heritage.
                    </p>
                    <p>
                        Highlights include galleries dedicated to the Peranakan culture, the history of Penang’s spice trade, and traditional art forms. Whether you are a history enthusiast or a curious traveler, the Penang State Museum provides a comprehensive understanding of the island’s past, from its early days as a British colony to its role in modern Malaysia.
                    </p>
                </section>

                <section className="museum-paragraph">
                    <h2>Penang War Museum</h2>
                    <p>
                        Perched on Bukit Batu Maung, the Penang War Museum is a haunting yet captivating site that offers a glimpse into Penang’s wartime past. Originally a British military fortress built in the 1930s, it was later used by the Japanese as a prison during World War II. The museum has preserved many of the original structures, including underground tunnels, ammunition storage areas, and barracks, offering visitors a chance to step back in time.
                    </p>
                    <p>
                        The museum also features exhibits on Malaysia’s involvement in World War II, with personal stories, artifacts, and photos that bring history to life. Its eerie atmosphere and rich historical significance make it a must-visit for anyone interested in military history and the resilience of Penang during turbulent times.
                    </p>
                </section>

                <section className="museum-paragraph">
                    <h2>Wonderfood Museum</h2>
                    <p>
                        The Wonderfood Museum in Georgetown is a feast for the senses and a celebration of Penang’s culinary heritage. This unique museum showcases larger-than-life replicas of local dishes, offering visitors an immersive and entertaining way to learn about Penang’s diverse food culture. From Char Kway Teow to Nasi Lemak, the exhibits highlight the flavors that have made Penang a global food destination.
                    </p>
                    <p>
                        The museum also delves into the history and significance of Penang’s street food culture, offering insights into how these dishes are prepared and their cultural relevance. It’s a perfect stop for food enthusiasts and families looking for an engaging and educational experience that combines fun with learning.
                    </p>
                </section>
            </div>
            {/* Back Button */}
            <div className="back-button-container">
                <button
                    onClick={() => navigate(-1)} // Navigate back
                    className="back-button"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Museum;
