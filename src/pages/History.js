import React, { useRef, useState } from 'react';
import './history.css';

const History = () => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0); // State to track active slide

    // Centralized slide data for scalability
    const slides = [
        { id: 0, src: "/Beach_Street.jpg", alt: "Beach Street", text: "Beach Street, or \"Lebuh Pantai,\" is one of Penang's oldest streets, established in the late 18th century as the island's commercial hub near its bustling port. It is renowned for its colonial-era architecture, blending British and Straits Chinese styles, and remains a vibrant financial and heritage district today." },
        { id: 1, src: "/townhall.jpg", alt: "Town Hall", text: "The Penang Town Hall, completed in 1883, is one of George Town's most iconic colonial-era landmarks, showcasing British Palladian architectural design. Originally built as a social venue for the European elite, it now serves as a historic site and venue for cultural events in Penang." },
        { id: 2, src: "/Port_of_penang.jpg", alt: "Port of Penang", text: "The Port of Penang, established in the late 18th century, played a crucial role as a strategic trade hub in Southeast Asia under British rule. Today, it remains a vital gateway for international maritime trade and a key contributor to Penang's economy." },
    ];

    const handleSlideLeft = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            const newActiveSlide = activeSlide === 0 ? slides.length - 1 : activeSlide - 1; // Loop back to the last slide
            sliderRef.current.scrollTo({
                left: slideWidth * newActiveSlide,
                behavior: 'smooth',
            });
            setActiveSlide(newActiveSlide); // Update active slide
        }
    };

    const handleSlideRight = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            const newActiveSlide = activeSlide === slides.length - 1 ? 0 : activeSlide + 1; // Loop back to the first slide
            sliderRef.current.scrollTo({
                left: slideWidth * newActiveSlide,
                behavior: 'smooth',
            });
            setActiveSlide(newActiveSlide); // Update active slide
        }
    };

    const handleDotClick = (index) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth',
            });
            setActiveSlide(index); // Update active slide
        }
    };


    return (
        <>
            <section className="history-container">
                <div className="history-container1">
                    <img 
                        src="/Street_art_1.png" 
                        alt="Penang Street Art 1" 
                        className="history-container-image" 
                    />
                </div>
                <div className="history-container2">
                    <img 
                        src="/Street_art_2.png" 
                        alt="Penang Street Art 2" 
                        className="history-container-image" 
                    />
                    <div className="history-text-content">
                        <h1 className="history-hero-title">
                            <span>PENANG</span>
                            <br />
                            History and Culture
                        </h1>
                        <p className="history-hero-description">
                            Look deep into culture, and you will understand everything better.
                        </p>
                        <button className="history-hero-button">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="history-container3">
                    <img 
                        src="/Street_art_3.png" 
                        alt="Penang Street Art 3" 
                        className="history-container-image" 
                    />
                </div>
            </section>

            <section>
                <div>
                    <h2 className="history-cards-title">
                        History of Penang
                    </h2>
                </div>
            </section>

           <section className="slider_container">
                <div className="slider-wrapper">
                    <button
                        className="slider-button slider-button-left"
                        onClick={handleSlideLeft}
                    >
                        <span className="material-icons">arrow_back</span>
                    </button>

                    <div className="slider" ref={sliderRef}>
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="slide">
                                <img src={slide.src} alt={slide.alt} />
                                {activeSlide === index && (
                                    <div className="slide-text">{slide.text}</div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        className="slider-button slider-button-right"
                        onClick={handleSlideRight}
                    >
                        <span className="material-icons">arrow_forward</span>
                    </button>

                    <button className='learn-more-button'>
                        Learn more
                    </button>
                </div>

                <div className="slider-nav">
                    {slides.map((_, index) => (
                        <a
                            key={index}
                            href={`#slide-${index}`}
                            className={activeSlide === index ? 'active-dot' : ''}
                            onClick={() => handleDotClick(index)}
                        ></a>
                    ))}
                </div>
            </section>

            <section>
                <div>
                    <h2 className="history-cards-title">
                        Explore Penang's Culinary Heritage
                    </h2>
                </div>
            </section>

            <section className="history-cards">
                <article className="history-card history-card--1">
                    <div className="history-card__img">
                        <img 
                            src="/wushi.jpg" 
                            alt="wushi" 
                        />                   
                    </div>                   
                    <a href="#" className="history-card_link">
                        <div className="history-card__img--hover">
                            <img 
                                src="/wushi.jpg" 
                                alt="Penang Street Art 1" 
                            />                            
                        </div>
                    </a>
                    <div className="history-card__info">
                        <span className="history-card__category">Chinese</span>
                        <h3 className="history-card__title">Chinese Culture</h3>
                        <a className="history-card__description" title="description"> 了解详情 </a>
                    </div>
                </article>

                <article className="history-card history-card--2">
                    <div className="history-card__img">
                        <img 
                            src="/tarian_melayu.jpeg" 
                            alt="tarian melayu" 
                        />                   
                    </div>
                    <a href="#" className="history-card_link">
                        <div className="history-card__img--hover">
                            <img 
                                src="/tarian_melayu.jpeg" 
                                alt="Penang Street Art 1" 
                            />                            
                        </div>
                    </a>
                    <div className="history-card__info">
                        <span className="history-card__category">Malay</span>
                        <h3 className="history-card__title">Malay Culture</h3>
                        <a className="history-card__description" title="description"> Lebih Lanjut </a>                    </div>
                </article>

                <article className="history-card history-card--3">
                    <div className="history-card__img">
                        <img 
                            src="/Indian_festival.png" 
                            alt="Indian festival" 
                        />                   
                    </div>
                    <a href="#" className="history-card_link">
                        <div className="history-card__img--hover">
                            <img 
                                src="/Indian_festival.png" 
                                alt="Indian festival" 
                            />                            
                        </div>
                    </a>
                    <div className="history-card__info">
                        <span className="history-card__category">Indian</span>
                        <h3 className="history-card__title">Indian Culture</h3>
                        <a className="history-card__description" title="description"> और अधिक जानें </a>
                    </div>
                </article>
            </section>
        </>
    );
};

export default History;
