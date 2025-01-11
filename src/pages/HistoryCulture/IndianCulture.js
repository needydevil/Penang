import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Culture.css'; // Add a separate CSS file for styling

const IndianCulture = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const cardData = [
        {
            id: 1,
            image: "/deepavali.jpg",
            alt: "Deepavali",
            title: "Deepavali",
            description: "Deepavali in Penang, the Hindu Festival of Lights, symbolizes the triumph of light over darkness. Little India in George Town comes alive with colorful decorations, kolam designs, and festive activities. Families gather for prayers at temples like the Sri Mahamariamman Temple, share traditional sweets, and enjoy cultural performances, making it a vibrant celebration of Penang’s multicultural heritage.",
        },
        {
            id: 2,
            image: "/thaipusam.png",
            alt: "Thaipusam",
            title: "Thaipusam",
            description: "Thaipusam in Penang is a grand Hindu festival dedicated to Lord Murugan, celebrated with devotion and vibrant processions. The highlight is the chariot procession from the Arulmigu Sri Mahamariamman Temple in George Town to the Arulmigu Balathandayuthapani Temple. Devotees carry kavadis and milk pots as acts of penance and thanksgiving, accompanied by traditional music and prayers. The festival attracts thousands of worshippers and visitors, reflecting Penang’s rich multicultural traditions.",
        },
        {
            id: 3,
            image: "/little_india.jpg",
            alt: "Little India",
            title: "Little India",
            description: "Little India in Penang, located in George Town, is a vibrant hub of Indian culture, filled with colorful streets, aromatic spices, and traditional goods like textiles and jewelry. Known for its authentic Indian cuisine and lively atmosphere, it comes alive during festivals like Deepavali and Thaipusam, reflecting Penang's rich multicultural heritage.",
        },
    ];

    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Indian Culture</h1>
            {cardData.map((card) => (
                <div className="card-container" key={card.id}>
                    <div className="culture-card">
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
            <button 
                onClick={() => navigate('/history-culture')} 
                className="back-button"
            >
                Back
            </button>
        </div>
    );
};

export default IndianCulture;