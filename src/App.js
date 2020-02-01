import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

// Components
import Header from './components/Header';
import Body from './components/Body';

const App = () => (
  <Router>
    <Header/>
    <Body/>
  </Router>
);

export default App;
