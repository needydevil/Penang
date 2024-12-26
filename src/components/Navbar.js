import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'; // Ensure this file exists for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">LOGO</div>
                <ul className="navbar-links">
                    <li>
                        <NavLink to="/" activeClassName="active" exact>
                            Home
                        </NavLink>
                    </li>
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