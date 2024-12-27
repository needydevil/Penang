import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Ensure this file exists for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Real Logo Section */}
                <div className="logo-container">
                    <NavLink to="/" className="logo">
                        <img 
                            src="/title.jpg" // Update the path to your logo image
                            alt="Areca Logo"
                            className="logo-image"
                        />
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    <li className="dropdown">
                        <NavLink to="/about" activeClassName="active">
                            About Penang
                        </NavLink>
                        {/* Dropdown menu */}
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/hotels" activeClassName="active">
                                    Hotels
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/transportation" activeClassName="active">
                                    Transportation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/weather" activeClassName="active">
                                    Weather
                                </NavLink>
                            </li>
                        </ul>
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
