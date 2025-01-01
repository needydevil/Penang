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
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }
                        >
                            About Penang
                        </NavLink>
                        {/* Dropdown menu */}
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink
                                    to="/hotels"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : undefined
                                    }
                                >
                                    Hotels
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/transportation"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : undefined
                                    }
                                >
                                    Transportation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/weather"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : undefined
                                    }
                                >
                                    Weather
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink
                            to="/tourist-spot"
                            className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }
                        >
                            Tourist Spot
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/food"
                            className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }
                        >
                            Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/history"
                            className={({ isActive }) =>
                                isActive ? 'active' : undefined
                            }
                        >
                            Culture & History
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
