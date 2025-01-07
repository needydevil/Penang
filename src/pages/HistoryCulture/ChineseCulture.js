import React from 'react';
import './ChineseCulture.css'; // Add a separate CSS file for styling

const ChineseCulture = () => {
    const cardData = [
        {
            id: 1,
            image: "/wushi.jpg",
            alt: "Wushi Lion Dance",
            title: "Lion Dance",
            description: "The Lion Dance is a traditional Chinese performance that brings good luck and prosperity, especially during the Lunar New Year.",
        },
        {
            id: 2,
            image: "/wushi.jpg",
            alt: "Chinese Calligraphy",
            title: "Calligraphy",
            description: "Chinese calligraphy is an ancient art form that showcases the beauty and cultural significance of Chinese characters.",
        },
        {
            id: 3,
            image: "/wushi.jpg",
            alt: "Chinese Cuisine",
            title: "Cuisine",
            description: "Experience the rich flavors of traditional Chinese dishes, from dumplings to roast duck and more.",
        },
    ];

    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Chinese Culture</h1>
            {cardData.map((card) => (
                <div className="card-container">
                <div className="culture-card" key={card.id}>
                    <div className="card-image">
                        <img src={card.image} alt={card.alt} />
                    </div>
                    <div className="card-content">
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    );
};

export default ChineseCulture;
