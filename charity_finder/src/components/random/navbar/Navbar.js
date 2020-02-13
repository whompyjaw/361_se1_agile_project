import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
//import Charity from './components/charity/charity';

const Navbar = props => (
    <header className="navbar">
        <nav className="navbar_nav">
            <div></div>
            <div className="navbar_logo"><Link to="/"><img id="logo"src="/img/logo.png" alt="logo"></img>Charity Finder</Link></div>
            <div className="push"></div>
            <div className="navbar_nav_element">
                <ul>
                    <li><Link to="/charitySearch" href="/">Find a Charity (Case 1)</Link></li>
                    <li><Link to="/charity">Charity Information (Case 7)</Link></li>
                    <li><a href="/">Seek Assistence From Charity (Case 10)</a></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Navbar;