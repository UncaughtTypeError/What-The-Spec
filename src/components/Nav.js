import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link to="/css">CSS</Link>
            </li>
            <li>
                <Link to="/html">HTML</Link>
            </li>
            <li>
                <Link to="/javascript">Javascript</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;