import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Culture.css'; // Add a separate CSS file for styling

const MalayCulture = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const cardData = [
        {
            id: 1,
            image: "/wau.jpg",
            alt: "Wau Bulan",
            title: "Wau Bulan",
            description: "Wau Bulan, or Moon Kite, is a traditional Malaysian kite known for its intricate designs and crescent moon shape. Originating from Kelantan, it is often crafted with vibrant colors and floral motifs, showcasing the creativity and craftsmanship of local artisans. Traditionally flown after the rice harvest, the kite is a symbol of gratitude and celebration, with its distinctive humming sound adding to its charm. Wau Bulan remains an iconic representation of Malaysia’s cultural heritage.",
        },
        {
            id: 2,
            image: "/ketupat.jpg",
            alt: "Ketupat Decoration",
            title: "Ketupat",
            description: "Ketupat is a traditional Southeast Asian delicacy made of rice packed tightly in a woven palm leaf pouch and boiled until firm. Commonly associated with festive celebrations like Hari Raya Aidilfitri in Malaysia, ketupat symbolizes gratitude and togetherness. The intricate weaving of the palm leaf pouch reflects the artistry and patience of the maker. Served with rendang, satay, or curries, ketupat is not just a dish but a cultural icon that represents the spirit of sharing and community in Malaysian traditions.",
        },
        {
            id: 3,
            image: "/wayangkulit.jpg",
            alt: "Wayang Kulit Show",
            title: "Wayang Kulit",
            description: "Wayang Kulit in Penang is a traditional shadow puppet theater reflecting the island's diverse cultural heritage. Rooted in Malay, Javanese, and Indian influences, it uses intricately carved leather puppets to narrate stories from the local folklore. Accompanied by traditional music with gongs and drums, a Tok Dalang (puppet master) brings the characters to life through storytelling and voice modulation. In Penang, it is celebrated as a cultural treasure, often performed during festivals and heritage events.",
        },
    ];

    return (
        <div style={{ padding: "2rem" }}>
            <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Malay Culture</h1>
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

export default MalayCulture;