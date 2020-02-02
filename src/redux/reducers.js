// Constants
import CONSTANTS from './constants';

const {
    UPDATE_QUOTE,
    UPDATE_VIEW,
} = CONSTANTS;

const initialStateQuote = {
    quote: '',
    cite: ''
}

export const updateQuote = (state = initialStateQuote, action = {}) => {

    switch(action.type) {
        case UPDATE_QUOTE:
            return { ...state, quote: action.payload.quote, cite: action.payload.cite };
        default:
            return state;
    }

}

const initialStateSpecView = {
    view: window.location.pathname.replace('/','')
}

export const updateSpecView = (state = initialStateSpecView, action = {}) => {

    switch(action.type) {
        case UPDATE_VIEW:
            return { ...state, view: action.view };
        default:
            return state;
    }

}