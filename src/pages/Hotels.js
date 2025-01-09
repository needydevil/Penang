import React from 'react';
import ImageCarousel2 from '../components/ImageCarousel2';
import './Hotels.css';

const Hotels = () => {
    const campbellImages = [
        { src: '/campbellHouse1.png', alt: 'Campbell House Penang 1' },
        { src: '/campbellHouse2.png', alt: 'Campbell House Penang 2' },
        { src: '/campbellHouse3.png', alt: 'Campbell House Penang 3' },
        { src: '/campbellHouse4.png', alt: 'Campbell House Penang 4' },
        { src: '/campbellHouse5.png', alt: 'Campbell House Penang 5' },
        { src: '/campbellHouse6.png', alt: 'Campbell House Penang 6' }
    ];

    const cheongFattTzeImages = [
        { src: '/cheongfatttzemansion.jpg', alt: 'Cheong Fatt Tze 1' },
        { src: '/cheongFattTze2.png', alt: 'Cheong Fatt Tze 2' },
        { src: '/cheongFattTze3.png', alt: 'Cheong Fatt Tze 3' },
        { src: '/cheongFattTze4.png', alt: 'Cheong Fatt Tze 4' },
        { src: '/cheongFattTze5.png', alt: 'Cheong Fatt Tze 5' },
        { src: '/cheongFattTze6.png', alt: 'Cheong Fatt Tze 6' }
    ];

    const BayviewImages = [
        { src: '/Bayview1.png', alt: 'Bayview Beach Resort 1' },
        { src: '/Bayview2.png', alt: 'Bayview Beach Resort 2' },
        { src: '/Bayview3.png', alt: 'Bayview Beach Resort 3' },
        { src: '/Bayview4.png', alt: 'Bayview Beach Resort 4' },
        { src: '/Bayview5.png', alt: 'Bayview Beach Resort 5' },
        { src: '/Bayview6.png', alt: 'Bayview Beach Resort 6' }
    ];

    const homptonImages = [
        { src: '/hompton1.png', alt: 'Hompton By The Beach Penang 1' },
        { src: '/hompton2.png', alt: 'Hompton By The Beach Penang 2' },
        { src: '/hompton3.png', alt: 'Hompton By The Beach Penang 3' },
        { src: '/hompton4.png', alt: 'Hompton By The Beach Penang 4 ' },
        { src: '/hompton5.png', alt: 'Hompton By The Beach Penang 5' },
        { src: '/hompton6.png', alt: 'Hompton By The Beach Penang 6' }
    ];

    return (
        <div className='hotel-page'>
            <div className='hotel-page-section'>
                <div className='hotel-image'>
                    <ImageCarousel2 images={campbellImages} />
                </div>
                <div className='hotel-transportation-description'>
                    <h1>Campbell House Penang</h1>
                    <p>
                        A luxury heritage-inspired boutique hotel located in the heart of George Town city, Penang. The hotel offers guests extraordinary staying experience from the heritage of Georgetown to the delicious treats of Penang.
                    </p>
                    <p>
                        Campbell House is conveniently located a 5-minute drive from Penang Museum and is surrounded by a variety of local shopping and eating options. It is also ten minutes' drive from Gurney Drive and roughly 17 km from Bayan Lepas International Airport.
                    </p>
                    <p>
                        It offers tastefully decorated rooms with free Wi-Fi and a lounge area. All of the large rooms have air conditioning, a laptop safe, an iPod docking station, and a flat-screen cable TV. They also offer contemporary restrooms, a minibar, and ironing amenities. Parking is also available on site.
                    </p>
                    <p>📍 Georgetown</p>
                </div>
            </div>
            <hr className="about-divider-line" />

            <div className='hotel-page-section'>
                <div className='hotel-image'>
                    <ImageCarousel2 images={cheongFattTzeImages} />
                </div>
                <div className='hotel-transportation-description'>
                    <h1>Cheong Fatt Tze - The Blue Mansion</h1>
                    <p>
                        The Blue Mansion skillfully combines modern comforts with vintage charm. Numerous facilities include a courtyard dining area, a charming terrace, and a fine dining experience at the Indigo restaurant.
                    </p>
                    <p>
                        You may learn more about the history and architecture of George Town's first heritage hotel by taking one of the daily guided house tours.
                    </p>
                    <p>
                        The Blue Mansion is conveniently situated, only a 5-minute walk from China Town and other important Penang historical sites, 4km from the Gurney Drive waterfront promenade, and 9km from the Kek Lok Si Buddhist temple.
                    </p>
                    <p>📍 Georgetown</p>
                </div>
            </div>
            <hr className="about-divider-line" />

            <div className='hotel-page-section'>
                <div className='hotel-image'>
                    <ImageCarousel2 images={BayviewImages} />
                </div>
                <div className='hotel-transportation-description'>
                    <h1>Bayview Beach Resort</h1>
                    <p>
                        Bayview Beach Resort Penang, located at Batu Ferringhi beach, offers a tropical escape with lush gardens, beachfront access, and activities like parasailing, jet-skiing, and spa treatments. Along with a gym, tennis courts, and flexible event spaces, the resort offers family-friendly facilities like kid-friendly pools, play areas, and babysitter services.
                    </p>
                    <p>
                        Visitors can explore the Batu Ferringhi Night Market, which is only a short walk away, eat at La Veranda Coffeehouse or Marco Polo, or visit nearby attractions like Georgetown's UNESCO World Heritage sites, which are about a 35-minute drive (17 km) away, and the stunning Penang National Park, which is about 10 minutes (5 km) away.
                    </p>
                    <p>
                        A restful stay is guaranteed with the large rooms, suites, and luxurious penthouse with a private rooftop pool.
                    </p>
                    <p>📍 Batu Ferringhi</p>
                </div>
            </div>
            <hr className="about-divider-line" />

            <div className='hotel-page-section'>
                <div className='hotel-image'>
                    <ImageCarousel2 images={homptonImages} />
                </div>
                <div className='hotel-transportation-description'>
                    <h1>Hompton By The Beach Penang</h1>
                    <p>
                        Hompton By The Beach Penang, a 4-star hotel located along the Tanjong Tokong seafront in George Town, offers a home-like experience with attentive services and stunning views of the Andaman Sea.
                    </p>
                    <p>
                        The hotel features air-conditioned rooms with modern amenities, including flat-screen TVs, coffee machines, and private bathrooms, with some rooms offering kitchenettes. Guests can enjoy facilities such as an outdoor swimming pool, a fitness centre, free WiFi, free private parking, a restaurant, a bar, and 24-hour room service, ensuring a comfortable and convenient stay.
                    </p>
                    <p>
                        Hompton By the Beach Penang just 2.2 km from Tanjung Tokong Beach, 2.6 km from Tanjung Bungah Beach, while Straits Quay is 1.8 km away. Penang International Airport is 23 km away.
                    </p>
                    <p>📍 Tanjung Tokong</p>
                </div>
            </div>
        </div>
    );
};

export default Hotels;
