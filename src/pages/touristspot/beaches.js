import React from 'react';
import './beaches.css';
import ImageCarousel from '../../components/ImageCarousel'; // Adjust path based on your file structure
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Beaches = () => {
    const navigate = useNavigate(); // Initialize navigate

    const images = [
        { id: 1, src: '/batuferringhi.webp', alt: 'Batu Ferringhi', caption: 'Batu Ferringhi Beach' },
        { id: 2, src: '/tanjungbungah1.jpg', alt: 'Tanjung Bungah', caption: 'Tanjung Bungah Beach' },
        { id: 3, src: '/MonkeyBeachTourfromPenang.jpg', alt: 'Monkey Beach', caption: 'Monkey Beach' },
    ];

    return (
        <div className="beaches-page">
            {/* Image Carousel */}
            <div className="carousel-wrapper">
                <ImageCarousel images={images} />
            </div>

            {/* Title and Descriptions */}
            <div className="beaches-description">
                <h1 className="beaches-title">Penang Beaches</h1>
                <section className="beaches-paragraph">
                    <h2>Batu Ferringhi</h2>
                    <p>
                        Batu Ferringhi is a vibrant seaside destination that has earned a reputation as Penang's ultimate beach retreat. With its golden sandy beaches and crystal-clear waters, it's an ideal spot for sunbathing, water sports, and evening strolls along the shoreline. Batu Ferringhi also comes alive at night with its famous night market, offering local crafts, delicious street food, and unique souvenirs.
                    </p>
                    <p>
                        The area is lined with luxury resorts, charming guesthouses, and seafood restaurants that cater to visitors seeking both relaxation and adventure. From parasailing to jet skiing, there's no shortage of activities for thrill-seekers. Batu Ferringhi embodies the perfect blend of serene beauty and vibrant local culture.
                    </p>
                </section>

                <section className="beaches-paragraph">
                    <h2>Tanjung Bungah</h2>
                    <p>
                        Tanjung Bungah, nestled between Georgetown and Batu Ferringhi, is a tranquil coastal town known for its picturesque scenery and peaceful ambiance. This hidden gem is perfect for travelers who prefer a quieter beach experience. Tanjung Bungah offers pristine beaches surrounded by lush greenery, making it an excellent location for picnics and family outings.
                    </p>
                    <p>
                        The town is also home to the Penang Floating Mosque, a stunning architectural marvel that appears to float on the sea during high tide. Visitors can enjoy breathtaking sunsets and indulge in fresh seafood at the local eateries. Tanjung Bungah’s laid-back charm makes it an ideal escape from the bustling city.
                    </p>
                </section>

                <section className="beaches-paragraph">
                    <h2>Monkey Beach</h2>
                    <p>
                        Tucked away in the Penang National Park, Monkey Beach offers an unspoiled paradise for nature lovers and adventure enthusiasts. This secluded beach is accessible by boat or a scenic jungle trek, making the journey part of the experience. Monkey Beach is famous for its pristine white sand, turquoise waters, and the playful monkeys that inhabit the surrounding jungle.
                    </p>
                    <p>
                        Visitors can swim, snorkel, or simply relax under the shade of swaying palm trees. For those seeking a bit more excitement, the beach is also a popular spot for fishing and camping. Monkey Beach’s untouched beauty and serene atmosphere make it a must-visit destination for those looking to connect with nature.
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

export default Beaches;
