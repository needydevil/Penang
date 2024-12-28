import React from 'react';
import './VisitPlaces.css';

const options = [
    { icon: '🏙️', name: 'George Town' },
    { icon: '🏖️', name: 'Beaches' },
    { icon: '🕌', name: 'Cultural & Religious Sites' },
    { icon: '🌳', name: 'Nature' },
    { icon: '🎭', name: 'Museums & Entertainment' },
];

const VisitPlaces = () => {
    return (
        <div className="visit-places-container">
            <h2>Visit Places</h2>
            <p>Discover the charm and attractions of these iconic places in Penang.</p>
            <div className="places-buttons-container">
                {options.map((option, index) => (
                    <button key={index} className="place-button">
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
