import React from 'react';
import './Transportation.css';
import ImageCarousel2 from '../components/ImageCarousel2';

const Transportation = () => {
    const landTransportImages = [
        { src: '/landTransport1.png', alt: 'Land Transportation 1' },
        { src: '/landTransport2.png', alt: 'Land Transportation 2' },
        { src: '/landTransport3.png', alt: 'Land Transportation 3' },
        { src: '/landTransport4.png', alt: 'Land Transportation 4' },
        { src: '/landTransport5.png', alt: 'Land Transportation 5' },
        { src: '/landTransport6.png', alt: 'Land Transportation 6' },
        { src: '/landTransport7.png', alt: 'Land Transportation 7' }
    ];

    const waterTransportImages = [
        { src: '/waterTransportn1.png', alt: 'Water Transportation 1' },
        { src: '/waterTransport2.png', alt: 'Water Transportation 2' },
        { src: '/waterTransport3.png', alt: 'Water Transportation 3' },
    ];

    const airTransportImages = [
        { src: '/airTransport1.png', alt: 'Air Transportation 1' },
        { src: '/airTransport2.png', alt: 'Air Transportation 2' },
        { src: '/airTransport3.png', alt: 'Air Transportation 3' },
        { src: '/airTransport4.png', alt: 'Air Transportation 4' },
    ];

    return (
        <div className='Transportation-page'>
            <div className='transportation-page-section'>
                <div className='transportation-image'>
                    <ImageCarousel2 images={landTransportImages} />
                </div>
                <div className='hotel-transportation-description'>   {/*here*/}
                    <h1>Land Transportation</h1>
                    <p>
                        <strong>Rapid Penang</strong> is the primary public bus service, which serves a wide area on the island and mainland. In George Town, it also runs a free Central Area Transit (CAT) bus service. To determine which bus route best suits you, just ask around, keep an eye out for signboards or you can use Google Maps to see the best route. Once you're on the Rapid Penang bus, let the driver know where you're going, pay the necessary fee, and get your ticket.
                    </p>
                    <p>
                        <strong>Grab</strong> are readily available around the island and mainland, making them a popular choice for locals and visitors to get around. Simply use the app to book a ride. You can pay with cash, credit card, debit card, or GrabPay—just select your preferred payment method when booking.
                    </p>
                    <p>

                        Penang is taking a step closer to becoming a livable and international city with the soft launch of the Bike Sharing System (BSS). The city is now connected by a 39.3 km dedicated bicycle lane from Straits Quay to Penang International Airport, offering commuters the convenience of bike-sharing through 29 <strong>LinkBike</strong> stations across the island. The first 30 minutes of each ride are free, with subsequent hours costing just RM1. A daily pass is also available for added convenience. Let’s cycle, let’s share, and let’s go green!
                    </p>
                    <p>
                        Travelling inside the country by <strong>train</strong> is a comfortable option that allows one to view a lot of the countryside. The railway station on mainland Penang connects to the mainline which runs from Perlis to Johor Bahru.
                    </p>
                </div>
            </div>
            <hr className="divider-line" />

            <div className='transportation-page-section'>
                <div className='transportation-image'>
                    <ImageCarousel2 images={waterTransportImages} />
                </div>
                <div className='hotel-transportation-description'>   {/*here*/}
                    <h1>Water Transportation</h1>
                    <p>
                        The <strong>Ferry</strong> Terminal, also known as the Jetty, is where passengers board ferries connecting Penang Island to the mainland.
                    </p>
                    <p>
                        Butterworth is just a 10-minute ferry ride away from the island. If you’re arriving in Penang by train from Kuala Lumpur or other cities, the ferry is a convenient option, as the terminal in Butterworth is located near the train station.
                    </p>
                    <p>
                        Although the Penang Bridge provides another route to the mainland, the ferry remains a popular and scenic alternative.
                    </p>
                    <p>
                        With departures every 20 to 30 minutes, it ensures a reliable and efficient service for commuters.
                    </p>
                </div>
            </div>
            <hr className="divider-line" />

            <div className='transportation-page-section'>
                <div className='transportation-image'>
                    <ImageCarousel2 images={airTransportImages} />
                </div>
                <div className='hotel-transportation-description'>   {/*here*/}
                    <h1>Air Transportation</h1>
                    <p>
                        Penang is easily accessible by air, with daily flights connecting the island to major airports both within Malaysia and across the region.
                    </p>
                    <p>
                        The <strong>Penang International Airport</strong>, located in Bayan Lepas, is situated approximately 20 kilometers from the city center, making it a convenient gateway for travelers.
                    </p>
                    <p>
                        The airport features a variety of food and beverage outlets, including popular options like McDonald’s, Starbucks, and Dunkin’ Donuts, ensuring visitors can grab a quick bite or a refreshing drink before or after their flight.
                    </p>
                    <p>
                        With a single terminal serving both domestic and international flights, the airport streamlines the travel process, with all passengers passing through the same security gates. The terminal is organized for ease of navigation, with Level 1 dedicated to Arrivals and Level 2 designated for Departures.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Transportation;