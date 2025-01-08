import React from 'react';
import './Culture.css'; // Add a separate CSS file for styling

const ChineseCulture = () => {
    const cardData = [
        {
            id: 1,
            image: "/wushi.jpg",
            alt: "Wushi Lion Dance",
            title: "Lion Dance",
            description: "The Lion Dance is a traditional Chinese performance symbolizing good luck and prosperity, especially during the Lunar New Year. Performed by two dancers to the beats of drums, gongs, and cymbals, it mimics a lion’s movements to ward off evil spirits and attract fortune. With vibrant costumes, acrobatics, and expressive motions, the dance is also featured at weddings and events, blessing occasions with harmony and success.",
        },
        {
            id: 2,
            image: "/chinese_opera.jpg",
            alt: "Chinese Opera",
            title: "Chinese Opera",
            description: "Chinese traditional opera is a centuries-old art form combining music, drama, dance, and acrobatics to tell stories of history and folklore. Known for its elaborate costumes, expressive makeup, and stylized performances, it features distinct regional styles like Peking and Cantonese Opera. Accompanied by traditional instruments, it remains a cherished cultural heritage, preserving tradition while captivating audiences.",
        },
        {
            id: 3,
            image: "/CNY.jpg",
            alt: "Chinese New Year",
            title: "Chinese New Year",
            description: "Chinese New Year in Penang is a vibrant celebration of Chinese heritage, featuring colorful decorations, lion dances, firecrackers, and illuminated temples like Kek Lok Si. Families gather for reunion dinners with symbolic dishes, and offerings are made to honor ancestors. Highlights include the Penang CNY Cultural and Heritage Celebration, showcasing traditional performances, handicrafts, and street food, blending festive joy with the preservation of rich Chinese traditions.",
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
