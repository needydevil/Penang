import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Ensure this file exists for styling

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Logo Section */}
                    <div className="logo-container">
                        <NavLink to="/" className="logo">
                            <img 
                                src="/title.jpg" // Update the path to your logo image
                                alt="Areca Logo"
                                className="logo-image"
                            />
                        </NavLink>
                    </div>

                    {/* Menu Icon for mobile view */}
                    <div className="menu-icon" onClick={toggleSidebar}>
                        &#9776; {/* Unicode for hamburger icon */}
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

            {/* Sidebar for mobile view */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul className="sidebar-links">
                    <li>
                        <NavLink to="/about" className="sidebar-link">
                            About Penang
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hotels" className="sidebar-link">
                            Hotels
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/transportation" className="sidebar-link">
                            Transportation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/weather" className="sidebar-link">
                            Weather
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tourist-spot" className="sidebar-link">
                            Tourist Spot
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/food" className="sidebar-link">
                            Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/history" className="sidebar-link">
                            Culture & History
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
