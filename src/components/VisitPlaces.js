import React from 'react';
import './VisitPlaces.css';

const options = [
    { icon: '🏙️', name: 'George Town', target: 'georgetown-section' },
    { icon: '🏖️', name: 'Beaches', target: 'beaches-section' },
    { icon: '🕌', name: 'Cultural & Religious Sites', target: 'cultural-section' },
    { icon: '🌳', name: 'Nature', target: 'nature-section' },
    { icon: '🎭', name: 'Museums & Entertainment', target: 'museums-section' },
];

const VisitPlaces = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="visit-places-container">
            <h2>Visit Places</h2>
            <p>Discover the charm and attractions of these iconic places in Penang.</p>
            <div className="places-buttons-container">
                {options.map((option, index) => (
                    <button
                        key={index}
                        className="place-button"
                        onClick={() => handleScroll(option.target)}
                    >
                        <span className="button-icon">{option.icon}</span>
                        <span className="button-text">{option.name}</span>
                    </button>
                ))}
            </div>
            <hr className="divider-line" />
        </div>
    );
};

export default VisitPlaces;
