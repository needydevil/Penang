import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', backgroundColor: '#f8f9fa', marginBottom: '20px' }}>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', gap: '20px', padding: 0 }}>
                <li><Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color: '#007bff' }}>About</Link></li>
                <li><Link to="/tourist-spot" style={{ textDecoration: 'none', color: '#007bff' }}>Tourist Spots</Link></li>
                <li><Link to="/food" style={{ textDecoration: 'none', color: '#007bff' }}>Food</Link></li>
                <li><Link to="/history" style={{ textDecoration: 'none', color: '#007bff' }}>History</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;