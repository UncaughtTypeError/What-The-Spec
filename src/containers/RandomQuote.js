import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Styles
import styles from '../styles/Quote.module.css';

// Actions
import { updateQuote } from '../redux/actions';

function RandomQuote() {

    const   quote = useSelector(state => state.updateQuote.quote),
            cite = useSelector(state => state.updateQuote.cite),
            dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateQuote());
    }, [dispatch]);
    
    return (
        quote &&
            <blockquote>
                <span className={styles.base}>&#8220;</span>
                {quote}
                <cite> ~ {cite}</cite>
            </blockquote>
    )
    
};

export default RandomQuote;