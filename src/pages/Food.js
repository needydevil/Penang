import React from 'react';
import FoodCard from '../components/FoodCard';
import './Food.css';

const Food = () => {
  // Data for Must-Try Street Foods and Signature Desserts & Snacks
  const streetFoodItems = [
    { image: '/char-kway-teow.jpg', name: 'Char Kway Teow', description: 'A stir-fried noodle dish with prawns, eggs, and bean sprouts.' },
    { image: '/hokkien-mee.jpg', name: 'Hokkien Mee', description: 'A savory noodle soup with pork and prawns.' },
    { image: '/nasi-kandar.jpg', name: 'Nasi Kandar', description: 'Rice served with a variety of curries and meats.' },
    { image: '/asam-laksa.jpg', name: 'Asam Laksa', description: 'A tangy and spicy noodle soup with fish and tamarind.' },
    { image: '/nasi-lemak.jpg', name: 'Nasi Lemak', description: 'Coconut rice served with sambal, egg, peanuts, and cucumber.' },
    { image: '/roti-canai.jpg', name: 'Roti Canai', description: 'A flaky flatbread served with dhal or curry.' }
  ];

  const dessertSnacks = [
    { image: '/teochew-chendol.jpg', name: 'Teochew Chendol', description: 'A refreshing dessert made with coconut milk, green jelly, and palm sugar.' },
    { image: '/nyonya-kuih.jpg', name: 'Nyonya Kuih', description: 'A variety of colorful steamed cakes made with rice flour and coconut.' },
    { image: '/apom-balik.jpg', name: 'Apom Balik', description: 'A crispy pancake filled with peanuts, corn, and sugar.' },
    { image: '/ais-kacang.jpg', name: 'Ais Kacang', description: 'A shaved ice dessert topped with red beans, sweet corn, and syrup.' },
    { image: '/satay.jpg', name: 'Satay', description: 'Grilled skewers of marinated meat served with peanut sauce.' }
  ];

  return (
    <div className="food">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Food Paradise</h1>
          <p>Explore the flavors of the island with our guide to must-try street foods and signature desserts!</p>
        </div>
      </section>

      {/* Must Try Street Food Section */}
      <section className="food-section">
        <h2 className="section-title">Must Try Street Food</h2>
        <div className="food-cards-container">
          {streetFoodItems.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Signature Desserts and Snacks Section */}
      <section className="food-section">
        <h2 className="section-title">Signature Dessert and Snacks</h2>
        <div className="food-cards-container">
          {dessertSnacks.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Food;
