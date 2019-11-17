import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Webcam</Link></li>
                <li><Link to="/about/foo">About Foo</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;