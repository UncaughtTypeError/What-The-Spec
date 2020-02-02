import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (

    <footer>
        <ul>
            <li><em>What The Spec?</em></li>
            <li>Source code on <FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/UncaughtTypeError/What-The-Spec/" target="_blank" rel="noopener" title="Github Repo">GitHub</a></li> 
            <li>Hosted on, and deployed by <a href="https://netlify.com/" target="_blank" rel="noopener" title="Netlify">Netlify <img width="80" loading="lazy" alt="Netlify" src="https://www.netlify.com/img/global/badges/netlify-dark.svg"/></a></li>
        </ul>
    </footer>

);

export default Footer;