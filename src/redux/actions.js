// Constants
import CONSTANTS from './constants';

// Scripts
import randomQuote from '../utils/quote-randomizer';

const {
    UPDATE_QUOTE,
    CSS_VIEW,
    HTML_VIEW,
    JS_VIEW
} = CONSTANTS;

const quote = randomQuote || {};

export const updateQuote = () => {
    console.log({quote});
    return {
        type: UPDATE_QUOTE,
        payload: quote,
    }
}