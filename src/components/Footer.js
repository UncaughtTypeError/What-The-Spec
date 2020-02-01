import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (

    <footer>
        <small>
            --- WIP ---<br/>
            <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/UncaughtTypeError/What-The-Spec/" target="_blank" rel="noopener" title="Github Repo"><em>What The Spec?</em></a>
        </small>
    </footer>

);

export default Footer;