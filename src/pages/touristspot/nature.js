import React from 'react';
import './nature.css';
import ImageCarousel from '../../components/ImageCarousel'; // Adjust path based on your file structure

const Nature = () => {
    const images = [
        { id: 1, src: '/penanghill.jpg', alt: 'Penang Hill', caption: 'The Scenic Beauty of Penang Hill' },
        { id: 2, src: '/penangnationalpark.jpg', alt: 'Penang National Park', caption: 'Exploring Penang National Park' },
        { id: 3, src: '/botanicalgarden.jpeg', alt: 'Penang Botanical Gardens', caption: 'Lush Greenery at Penang Botanical Gardens' },
    ];

    return (
        <div className="nature-page">
            {/* Image Carousel */}
            <div className="carousel-wrapper">
                <ImageCarousel images={images} />
            </div>

            {/* Title and Descriptions */}
            <div className="nature-description">
                <h1 className="nature-title">Nature in Penang</h1>

                <section className="nature-paragraph">
                    <h2>Penang Hill</h2>
                    <p>
                        Penang Hill, locally known as Bukit Bendera, offers a tranquil escape from the bustling streets of Georgetown. Rising over 800 meters above sea level, it provides breathtaking panoramic views of the island and mainland. Visitors can reach the summit via the funicular railway, one of the steepest tracks in the world, or by hiking through lush trails.
                    </p>
                    <p>
                        Once at the top, explore the colonial-style bungalows, the Owl Museum, and The Habitat, an eco-park offering canopy walks and zip lines. The cooling climate, verdant surroundings, and stunning vistas make Penang Hill a must-visit for nature enthusiasts and adventure seekers alike.
                    </p>
                </section>

                <section className="nature-paragraph">
                    <h2>Penang National Park</h2>
                    <p>
                        Penang National Park is a treasure trove of biodiversity and natural wonders. Spanning over 1,200 hectares, it is home to mangroves, rainforests, and pristine beaches. The park offers several hiking trails leading to attractions such as the serene Teluk Bahang Beach and the iconic lighthouse at Cape Rachado.
                    </p>
                    <p>
                        For wildlife lovers, the park is a sanctuary for endangered species such as green sea turtles and dusky leaf monkeys. Activities like camping, bird watching, and canopy walks allow visitors to immerse themselves in the untouched beauty of Penang's wilderness. It’s a haven for those seeking adventure and tranquility.
                    </p>
                </section>

                <section className="nature-paragraph">
                    <h2>Penang Botanical Gardens</h2>
                    <p>
                        Known as the "Waterfall Gardens" due to its proximity to a cascading waterfall, the Penang Botanical Gardens is a green oasis near Georgetown. Spanning over 30 hectares, it features beautifully manicured landscapes, a wide variety of tropical plants, and iconic giant water lilies.
                    </p>
                    <p>
                        The gardens are also home to long-tailed macaques and a wide range of bird species. Whether you're looking for a peaceful stroll, a jog, or simply to admire nature, the Botanical Gardens is a refreshing escape from city life. Its annual floral festivals further highlight its charm and beauty.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Nature;
