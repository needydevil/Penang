import React from 'react';
import './history.css';

const History = () => {
    return (
        <>
            <section className="history-container">
                <div className="container1">
                    <img 
                        src="/Street_art_1.png" 
                        alt="Penang Street Art 1" 
                        className="container-image" 
                    />
                </div>
                <div className="container2">
                    <img 
                        src="/Street_art_2.png" 
                        alt="Penang Street Art 2" 
                        className="container-image" 
                    />
                    <div className="text-content">
                        <h1 className="hero-title">
                            <span>PENANG</span>
                            <br />
                            History and Culture
                        </h1>
                        <p className="hero-description">
                            Look deep into culture, and you will understand everything better.
                        </p>
                        <button className="hero-button">
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="container3">
                    <img 
                        src="/Street_art_3.png" 
                        alt="Penang Street Art 3" 
                        className="container-image" 
                    />
                </div>
            </section>

            <section className="cards">
                <article className="card card--1">
                    <div className="card__img" style={{ backgroundImage: "/Street_art_1.png"}}></div>
                    <a href="#" className="card_link">
                        <div className="card__img--hover">
                        <img 
                        src="/Street_art_1.png" 
                        alt="Penang Street Art 1" 
                        className="backgroundImage" 
                    />                            
                        </div>
                    </a>
                    <div className="card__info">
                        <span className="card__category">Chinese</span>
                        <h3 className="card__title">Explore Chinese Cuisine</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">Jun Hao</a></span>
                    </div>
                </article>

                <article className="card card--2">
                    <div className="card__img" style={{ backgroundImage: "/Street_art_1.png" }}></div>
                    <a href="#" className="card_link">
                    <div className="card__img--hover">
                        <img 
                        src="/Street_art_1.png" 
                        alt="Penang Street Art 1" 
                        className="backgroundImage" 
                    />                            
                        </div>
                    </a>
                    <div className="card__info">
                        <span className="card__category">Malay</span>
                        <h3 className="card__title">Explore Malay Cuisine</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">Wei Qing</a></span>
                    </div>
                </article>

                <article className="card card--3">
                    <div className="card__img" style={{ backgroundImage: "/Street_art_1.png"}}></div>
                    <a href="#" className="card_link">
                    <div className="card__img--hover">
                        <img 
                        src="/Street_art_1.png" 
                        alt="Penang Street Art 1" 
                        className="backgroundImage" 
                    />                            
                        </div>
                    </a>
                    <div className="card__info">
                        <span className="card__category">Indian</span>
                        <h3 className="card__title">Explore Indian Cuisine</h3>
                        <span className="card__by">by <a href="#" className="card__author" title="author">Xin Jing</a></span>
                    </div>
                </article>
            </section>
        </>
    );
};

export default History;
