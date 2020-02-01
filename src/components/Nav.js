import React from 'react';
import { Link } from 'react-router-dom';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link to="/css">
                    <FontAwesomeIcon icon={faCss3Alt} />
                    CSS
                </Link>
            </li>
            <li>
                <Link to="/html">
                    <FontAwesomeIcon icon={faHtml5} />
                    HTML
                </Link>
            </li>
            <li>
                <Link to="/javascript">
                    <FontAwesomeIcon icon={faJs} />
                    Javascript
                </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;