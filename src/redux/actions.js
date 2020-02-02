// Constants
import CONSTANTS from './constants';

// Scripts
import randomQuote from '../utils/quote-randomizer';

const {
    UPDATE_QUOTE,
    UPDATE_VIEW,
} = CONSTANTS;

const quote = randomQuote || {};

export const updateQuote = () => {
    return {
        type: UPDATE_QUOTE,
        payload: quote,
    }
}

export const updateView = (view) => {
    return {
        type: UPDATE_VIEW,
        view: view,
    }
} 