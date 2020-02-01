import React from 'react';

// Scripts
import randomQuote from '../utils/quote-randomizer';

const RandomQuote = () => (
    
    <blockquote>
        {randomQuote.quote}
        <cite>~ {randomQuote.cite}</cite>
    </blockquote>
    
);

export default RandomQuote;