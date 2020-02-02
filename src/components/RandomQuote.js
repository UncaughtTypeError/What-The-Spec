import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { updateQuote } from '../redux/actions';

function RandomQuote() {

const   quote = useSelector(state => state.updateQuote.quote),
        cite = useSelector(state => state.updateQuote.cite),
        dispatch = useDispatch(),
        props = { quote, cite, dispatch };

    useEffect(() => {
        dispatch(updateQuote());
    }, [dispatch]);
    
    return (
        props.quote ?
            <blockquote>
                {props.quote}
                <cite> ~ {props.cite}</cite>
            </blockquote>
        : 
            <blockquote>
                &nbsp;
            </blockquote>
    )
    
};

export default RandomQuote;