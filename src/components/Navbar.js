import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Added Link for the logo
import '../App.css'; // Ensure this file exists for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Make the logo clickable and redirect to home */}
                <div className="logo">
                    <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>
                        LOGO
                    </Link>
                </div>

                <ul className="navbar-links">
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About Penang
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tourist-spot" activeClassName="active">
                            Tourist Spot
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/food" activeClassName="active">
                            Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/history" activeClassName="active">
                            Culture & History
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;