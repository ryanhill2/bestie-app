import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-raj">About Raj</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;