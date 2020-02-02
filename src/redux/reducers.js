// Constants
import CONSTANTS from './constants';

const {
    UPDATE_QUOTE,
    CSS_VIEW,
    HTML_VIEW,
    JS_VIEW
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
    spec: null
}

export const updateSpecView = (state = initialStateSpecView, action = {}) => {

    switch(action.type) {
        case CSS_VIEW:
            return { ...state, spec: 'css' };
        case HTML_VIEW:
            return { ...state, spec: 'html' };
        case JS_VIEW:
            return { ...state, spec: 'js' };
        default:
            return state;
    }

}