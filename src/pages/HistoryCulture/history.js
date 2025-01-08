import React from 'react';
import './history.css';

const History = () => {
    return (
        <div className="history-container">
            <section className="history-section">
                <h1 className="history-title">The History of Penang</h1>
                <p className="history-introduction">
                    Penang's history is a captivating tale of strategic importance, cultural diversity, and transformation over the centuries. Its location along the Strait of Malacca has long made it a crucial node in global trade networks.
                </p>

                <h2 className="history-subtitle">Early Beginnings</h2>
                <p>
                    Penang's recorded history begins with its early role as a sparsely populated island under the Sultanate of Kedah. Known as Pulau Pinang (meaning "Island of the Areca Nut Palm"), it was used by mariners as a stopover, thanks to its natural harbor and proximity to trade routes.
                </p>

                <h2 className="history-subtitle">British Acquisition and Founding</h2>
                <p>
                    In 1786, Captain Francis Light, representing the British East India Company, negotiated with the Sultan of Kedah to acquire Penang Island. Light promised British protection to Kedah against Siamese and Burmese threats. In return, the Sultan ceded the island to the British. Light established George Town as the first British settlement in Southeast Asia, naming it after King George III. Penang's free port status transformed it into a bustling hub of commerce, attracting traders from around the world.
                </p>
                <div className="history-image-container">
                    <img src="Francis_light.jpg" alt="Francis Light" className="history-vertical-image" />
                    <p className="history-image-description">Francis Light, the founder of Penang</p>
                </div>
                <div className="history-image-container">
                    <img src="Georgetown1811.jpg" alt="Georgetown in 1811" className="history-image" />
                    <p className="history-image-description">An 1811 depiction of George Town</p>
                </div>

                <h2 className="history-subtitle">Port of Penang</h2>
                <p>
                    The Port of Penang, established in the late 18th century, played a pivotal role in the island's development as a key trading hub. Situated along the Strait of Malacca, it facilitated trade between China, India, Southeast Asia, and Europe. The port's strategic location made it a focal point for spices, tin, and other goods, boosting Penang's economic significance.
                </p>
                <div className="history-image-container">
                    <img src="Port_of_penang.jpg" alt="Port of Penang" className="history-image" />
                    <p className="history-image-description">Port of Penang</p>
                </div>

                <h2 className="history-subtitle">Japanese Occupation and Post-War Developments</h2>
                <p>
                    During World War II, Penang was occupied by the Japanese from 1941 to 1945, a period marked by hardship. After the war, Penang was incorporated into the Malayan Union in 1946 and subsequently became a state within the Federation of Malaya in 1948. Independence was achieved on 31 August 1957.
                </p>
                <div className="history-image-container">
                    <img src="ww2.jpg" alt="World War II" className="history-image" />
                    <p className="history-image-description">Penang during World War II</p>
                </div>

                <h2 className="history-subtitle">Modern Penang</h2>
                <p>
                    Today, Penang is a thriving Malaysian state known for its historical landmarks, multicultural society, and culinary heritage. Divided into Penang Island and Seberang Perai on the mainland, it balances its rich history with modern development, making it one of Malaysia's most fascinating regions.
                </p>
                <div className="history-image-container">
                    <img src="modernPenang.jpeg" alt="Modern Penang" className="history-image" />
                    <p className="history-image-description">Modern Penang</p>
                </div>
            </section>
        </div>
    );
};

export default History;
