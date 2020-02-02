import React from 'react';
import { Link } from 'react-router-dom';

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

    return (
        <nav data-view={view}>
            <ul>
                <li className='css'>
                    <Link to='/css' onClick={() => setView('css')}>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        CSS
                    </Link>
                </li>
                <li className='html'>
                    <Link to='/html' onClick={() => setView('html')}>
                        <FontAwesomeIcon icon={faHtml5} />
                        HTML
                    </Link>
                </li>
                <li className='js' onClick={() => setView('js')}>
                    <Link to='/javascript'>
                        <FontAwesomeIcon icon={faJs} />
                        Javascript
                    </Link>
                </li>
            </ul>
        </nav>
    );
    
};

export default Nav;