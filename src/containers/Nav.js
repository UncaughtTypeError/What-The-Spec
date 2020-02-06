import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from '../styles/Nav.module.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { updateView } from '../redux/actions';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';

function Nav() {

    const   view = useSelector(state => state.updateSpecView.view),
            dispatch = useDispatch();

    const setView = (view) => {
        dispatch(updateView(view));
    }

    useEffect(() => {
        dispatch(updateView(view));
    }, [dispatch, view]);

    return (
        <nav data-view={view} className={styles.base}>
            <ul>
                <li className={styles.css}>
                    <Link to='/css' onClick={() => setView('css')}>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        CSS
                    </Link>
                </li>
                <li className={styles.html}>
                    <Link to={`${process.env.PUBLIC_URL}/html`} onClick={() => setView('html')}>
                        <FontAwesomeIcon icon={faHtml5} />
                        HTML
                    </Link>
                </li>
                <li className={styles.js} onClick={() => setView('javascript')}>
                    <Link to={`${process.env.PUBLIC_URL}/javascript`}>
                        <FontAwesomeIcon icon={faJs} />
                        Javascript
                    </Link>
                </li>
            </ul>
        </nav>
    );
    
};

export default Nav;