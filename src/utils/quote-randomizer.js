const   PERSON_ALPHA = 'Jeff',
        PERSON_BRAVO = 'Jess';

const quotesAlpha = [
    {
        quote: 'What\'s the difference between "Candidate" and "Draft Candidate" again?',
        cite: PERSON_ALPHA,
    },
    {
        quote: 'What the spec is "FPWD"?',
        cite: PERSON_ALPHA,
    },
    {
        quote: 'Just going to look that up real quick...',
        cite: PERSON_ALPHA,
    },
];

const quotesBravo = [
    {
        cite: PERSON_BRAVO,
        quote: 'Does that mean it\'s ready to use?',
    },
    {
        quote: 'What the spec is "Living Standards"?',
        cite: PERSON_BRAVO,
    },
    {
        quote: 'Just need a refresher on that TC39 process.',
        cite: PERSON_BRAVO,
    },
];

const   quotesArray = [...quotesAlpha, ...quotesBravo],
        randomQuote = quotesArray[Math.floor(Math.random()*quotesArray.length)];

export default randomQuote;