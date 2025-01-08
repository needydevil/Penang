import React from 'react';
import './FoodCard.css';

const FoodCard = ({ image, name, description, onClick }) => {
  return (
    <div className="food-card" onClick={onClick}>
      <img className="food-card-img" src={image} alt={name} />
      <div className="food-card-content">
        <h3 className="food-card-name">{name}</h3>
        <p className="food-card-description">{description}</p>
      </div>
    </div>
  );
};

export default FoodCard;
