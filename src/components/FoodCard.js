import React, { useState } from 'react';
import './FoodCard.css';

const FoodCard = ({ image, name, description, priceRange, location }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.stopPropagation(); // Prevent click from bubbling
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="food-card" onClick={toggleExpand}>
        <img className="food-card-img" src={image} alt={name} />
        <div className="food-card-content">
          <h3 className="food-card-name">{name}</h3>
          <p className="food-card-description">{description}</p>
        </div>
      </div>

      {/* Render overlay only when expanded */}
      {isExpanded && (
        <div className="overlay">
          <div className="overlay-content">
            <div className="overlay-left">
              <img className="overlay-img" src={image} alt={name} />
            </div>
            <div className="overlay-right">
              <h3>{name}</h3>
              <p>{description}</p>
              <p>
                <strong>💲Price:</strong> RM {priceRange}
              </p>
              <p>
                <strong>📌Recommended location:</strong> {location || "N/A"}
              </p>
              <button className="close-btn" onClick={toggleExpand}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodCard;
