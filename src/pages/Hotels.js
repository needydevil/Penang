import React from 'react';
import ImageCarousel2 from '../components/ImageCarousel2';
import './Hotels.css';

const Hotels = () => {
    const campbellImages = [
        { src: '/campbellHouse1.png', alt: 'Campbell House Penang 1' },
        { src: '/campbellHouse2.png', alt: 'Campbell House Penang 2' },
        { src: '/campbellHouse3.png', alt: 'Campbell House Penang 3' }
    ];

    return (
        <div className='hotel-page'>
            <div className='hotel-page-section'>
                <div className='hotel-image'>
                    <ImageCarousel2 images={campbellImages} />
                </div>
                <div className='hotel-description'>
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
        </div>
    );
};

export default Hotels;
