import React, { useState } from 'react';

function App() {
    const [spots, setSpots] = useState(['Penang Hill', 'Kek Lok Si Temple', 'Batu Ferringhi']);

    const addSpot = () => {
        const newSpot = prompt('Enter a new tourist spot:');
        if (newSpot) setSpots([...spots, newSpot]);
    };

    return (
        <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '20px' }}>
            <h1>Welcome to Penang!</h1>
            <p>Explore the beauty and culture of Penang.</p>

            <h2>Tourist Spots</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {spots.map((spot, index) => (
                    <li key={index} style={{ margin: '10px 0', fontSize: '18px' }}>
                        🏞️ {spot}
                    </li>
                ))}
            </ul>

            <button
                onClick={addSpot}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Add Tourist Spot
            </button>
        </div>
    );
}

export default App;