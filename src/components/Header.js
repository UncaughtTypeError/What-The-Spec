import React from 'react';

// Styles
import styles from '../styles/Header.module.css';

// Components
import Nav from '../containers/Nav'

const Header = () => (

    <header className={styles.base}>
        <hgroup>
            <h1><span>W</span>hat <span>T</span>he <span>S</span>pec?</h1>
            <h2>Definitions on proposal stages for CSS, HTML & Javascript specifications</h2>
        </hgroup>
        <Nav/>
    </header>

);

export default Header;