import React from 'react';
import './history.css';

const History = () => {
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
                        Explore Penang's Culinary Heritage
                    </h2>
                </div>
            </section>

            <section className="history-cards">
                <article className="history-card history-card--1">
                    <div className="history-card__img">
                        <img 
                            src="/Street_art_1.png" 
                            alt="Penang Street Art 1" 
                        />                   
                    </div>                   
                    <a href="#" className="history-card_link">
                        <div className="history-card__img--hover">
                            <img 
                                src="/Street_art_1.png" 
                                alt="Penang Street Art 1" 
                            />                            
                        </div>
                    </a>
                    <div className="history-card__info">
                        <span className="history-card__category">Chinese</span>
                        <h3 className="history-card__title">Explore Chinese Cuisine</h3>
                        <span className="history-card__by">by <a href="#" className="history-card__author" title="author">Jun Hao</a></span>
                    </div>
                </article>

                <article className="history-card history-card--2">
                    <div className="history-card__img">
                        <img 
                            src="/Street_art_1.png" 
                            alt="Penang Street Art 1" 
                        />                   
                    </div>
                    <a href="#" className="history-card_link">
                        <div className="history-card__img--hover">
                            <img 
                                src="/Street_art_1.png" 
                                alt="Penang Street Art 1" 
                            />                            
                        </div>
                    </a>
                    <div className="history-card__info">
                        <span className="history-card__category">Malay</span>
                        <h3 className="history-card__title">Explore Malay Cuisine</h3>
                        <span className="history-card__by">by <a href="#" className="history-card__author" title="author">Wei Qing</a></span>
                    </div>
                </article>

                <article className="history-card history-card--3">
                    <div className="history-card__img">
                        <img 
                            src="/Street_art_1.png" 
                            alt="Penang Street Art 1" 
                        />                   
                    </div>
                    <a href="#" className="history-card_link">
                        <div className="history-card__img--hover">
                            <img 
                                src="/Street_art_1.png" 
                                alt="Penang Street Art 1" 
                            />                            
                        </div>
                    </a>
                    <div className="history-card__info">
                        <span className="history-card__category">Indian</span>
                        <h3 className="history-card__title">Explore Indian Cuisine</h3>
                        <span className="history-card__by">by <a href="#" className="history-card__author" title="author">Xin Jing</a></span>
                    </div>
                </article>
            </section>
        </>
    );
};

export default History;
