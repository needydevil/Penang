import React from 'react';
import './TouristSpot.css';
import { useNavigate } from 'react-router-dom';
import VisitPlaces from '../components/VisitPlaces';

const TouristSpot = () => {
    const navigate = useNavigate();
    return (
        <div className="tourist-spot-page">
            {/* Section 1: Main Tourist Spot */}
            <div className="tourist-spot-container">
                <div className="tourist-spot-image-container">
                    <img
                        className="tourist-spot-image"
                        src="/tourist-spot2.png"
                        alt="Penang Street"
                    />
                </div>
                <div className="tourist-spot-content">
                    <h1>Penang Island</h1>
                    <p>
                        A place rich in history, culture, and natural beauty, Penang Island offers vibrant markets,
                        iconic heritage sites, and ancient streets. This destination captures the essence of tradition
                        while welcoming visitors with modern attractions, making it a must-visit location.
                    </p>
                    <button className="start-discovering-button">Start Discovering</button>
                </div>
            </div>

            {/* Section 2: Visit Places */}
            <VisitPlaces />

            {/* Section 3: Georgetown Highlights */}
            <div id="georgetown-section" className="section">
                <div className="section-header">
                    <h2>Georgetown</h2>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="/penangstreet.jpg" alt="Penang Street Art" className="card-image" />
                        <div className="card-content">
                            <h3>Penang Street Art</h3>
                            <p>Streets that breathe life into walls, narrating captivating cultural stories through vibrant murals.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/peranakanmansion.jpg" alt="Pinang Peranakan Mansion" className="card-image" />
                        <div className="card-content">
                            <h3>Pinang Peranakan Mansion</h3>
                            <p>A museum showcasing the rich history and heritage of the Peranakans in Penang.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/cheongfatttzemansion.jpg" alt="Cheong Fatt Tze Mansion" className="card-image" />
                        <div className="card-content">
                            <h3>Cheong Fatt Tze Mansion</h3>
                            <p>The iconic Blue Mansion of Georgetown offering cultural tours and luxurious stays.</p>
                        </div>
                    </div>
                </div>
                <div className="view-more-button-container">
                    <button className="view-more-button" onClick={() => navigate('/georgetown')}>
                        View More
                    </button>
                </div>
            </div>

            {/* Section 4: Beaches */}
            <div id="beaches-section" className="section">
                <div className="section-header">
                    <h2>Beaches</h2>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="/batuferringhi.jpeg" alt="Batu Ferringhi" className="card-image" />
                        <div className="card-content">
                            <h3>Batu Ferringhi</h3>
                            <p>A popular beach destination offering water sports, night markets, and scenic coastal views.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/tanjungbungah.jpeg" alt="Tanjung Bungah" className="card-image" />
                        <div className="card-content">
                            <h3>Tanjung Bungah</h3>
                            <p>A serene beach area perfect for relaxation and family picnics.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/monkeybeach.jpg" alt="Monkey Beach" className="card-image" />
                        <div className="card-content">
                            <h3>Monkey Beach</h3>
                            <p>A secluded gem known for its crystal-clear waters and hiking trails.</p>
                        </div>
                    </div>
                </div>
                <div className="view-more-button-container">
                    <button className="view-more-button" onClick={() => navigate('/beaches')}>
                        View More
                    </button>
                </div>
            </div>

            {/* Section 5: Culture & Religious Sites */}
            <div id="cultural-section" className="section">
                <div className="section-header">
                    <h2>Culture & Religious Sites</h2>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="/kekloksitemple.jpeg" alt="Kek Lok Si Temple" className="card-image" />
                        <div className="card-content">
                            <h3>Kek Lok Si Temple</h3>
                            <p>The largest Buddhist temple in Malaysia, nestled on the hillside.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/kapitankeling.jpeg" alt="Kapitan Keling Mosque" className="card-image" />
                        <div className="card-content">
                            <h3>Kapitan Keling Mosque</h3>
                            <p>An iconic mosque with stunning architecture representing Penang's Muslim heritage.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/khookongsi.jpeg" alt="Khoo Kongsi" className="card-image" />
                        <div className="card-content">
                            <h3>Khoo Kongsi</h3>
                            <p>A magnificent clanhouse showcasing intricate Chinese architecture and rich history.</p>
                        </div>
                    </div>
                </div>
                <div className="view-more-button-container">
                    <button className="view-more-button" onClick={() => navigate('/cultural')}>
                        View More
                    </button>
                </div>
            </div>

            {/* Section 6: Nature */}
            <div id="nature-section" className="section">
                <div className="section-header">
                    <h2>Nature</h2>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="/penanghill.jpg" alt="Penang Hill" className="card-image" />
                        <div className="card-content">
                            <h3>Penang Hill</h3>
                            <p>Breathtaking panoramic views and cool weather await you atop Penang Hill.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/penangnationalpark.jpg" alt="Penang National Park" className="card-image" />
                        <div className="card-content">
                            <h3>Penang National Park</h3>
                            <p>A lush haven of biodiversity, Penang National Park features scenic trails, pristine beaches, and unique ecosystems perfect for nature lovers.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/botanicalgarden.jpeg" alt="Penang Botanical Gardens" className="card-image" />
                        <div className="card-content">
                            <h3>Penang Botanical Gardens</h3>
                            <p>A serene garden boasting lush greenery, flowers, and natural waterfalls.</p>
                        </div>
                    </div>
                </div>
                <div className="view-more-button-container">
                    <button className="view-more-button" onClick={() => navigate('/nature')}>
                        View More
                    </button>
                </div>
            </div>

            {/* Section 7: Museums & Entertainment */}
            <div id="museums-section" className="section">
                <div className="section-header">
                    <h2>Museums & Entertainment</h2>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src="/penangstatemuseum.jpeg" alt="Penang State Museum" className="card-image" />
                        <div className="card-content">
                            <h3>Penang State Museum</h3>
                            <p>Explore Penang's rich history and culture through engaging exhibits.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/penangwarmuseum.jpg" alt="Penang War Museum" className="card-image" />
                        <div className="card-content">
                            <h3>Penang War Museum</h3>
                            <p>A historic fortress turned museum, Penang War Museum offers a glimpse into Malaysia's wartime past with its underground tunnels and preserved artifacts.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/wonderfood.jpeg" alt="Wonderfood Museum" className="card-image" />
                        <div className="card-content">
                            <h3>Wonderfood Museum</h3>
                            <p>A unique museum showcasing giant replicas of local delicacies and food culture.</p>
                        </div>
                    </div>
                </div>
                <div className="view-more-button-container">
                    <button className="view-more-button" onClick={() => navigate('/museum')}>
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
