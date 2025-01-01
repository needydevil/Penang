import React, { useRef, useState } from 'react';
import './history.css';

const History = () => {
    const sliderRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0); // State to track active slide

    const handleSlideLeft = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            const newActiveSlide = activeSlide === 0 ? 2 : activeSlide - 1; // Loop back to the last slide
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
            const newActiveSlide = activeSlide === 2 ? 0 : activeSlide + 1; // Loop back to the first slide
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
                        &#8592; {/* Left Arrow */}
                    </button>
                    <div className="slider" ref={sliderRef}>
                        <img
                            id="slide-1"
                            src="/Beach_Street.jpg"
                            alt="Beach Street"
                        />
                        <img
                            id="slide-2"
                            src="/townhall.jpg"
                            alt="Town Hall"
                        />
                        <img
                            id="slide-3"
                            src="/Port_of_penang.jpg"
                            alt="Port of Penang"
                        />
                    </div>
                    <button
                        className="slider-button slider-button-right"
                        onClick={handleSlideRight}
                    >
                        &#8594; {/* Right Arrow */}
                    </button>
                </div>
                <div className="slider-nav">
                    <a
                        href="#slide-1"
                        className={activeSlide === 0 ? 'active-dot' : ''}
                        onClick={() => handleDotClick(0)}
                    ></a>
                    <a
                        href="#slide-2"
                        className={activeSlide === 1 ? 'active-dot' : ''}
                        onClick={() => handleDotClick(1)}
                    ></a>
                    <a
                        href="#slide-3"
                        className={activeSlide === 2 ? 'active-dot' : ''}
                        onClick={() => handleDotClick(2)}
                    ></a>
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
