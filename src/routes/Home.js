import React, { Fragment } from 'react';

// Components
import RandomQuote from '../containers/RandomQuote';

const Home = () => (
   <Fragment>
      <h3 style={{fontWeight: 'normal'}}>Select a language</h3>
      <RandomQuote/>
   </Fragment>
);

export default Home;