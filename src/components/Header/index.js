import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => (
    <header className="Header__root">
        <div className="Header__container frow justify-between">
            <div className="frow row-start">
                <h1 className="Header__logo">
                    <Link to="/" className="Header__logo-link">
                        Beardstagram
                        <i className="fa fa-instagram Header__instagram-icon" aria-hidden="true"></i>
                    </Link>
                </h1>
            </div>
            <nav className="frow centered">
                <ul className="Header__nav-group">
                    <li className="Header__nav-link">
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li className="Header__nav-link">
                        <Link to="/explore">Explore</Link>
                    </li>
                    <li className="Header__nav-link">
                        <Link to="/signin">SignIn</Link>
                    </li>
                    <li className="Header__nav-link">
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header;