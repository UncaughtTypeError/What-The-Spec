import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

// Components
import Nav from './components/Nav';
import Body from './components/Body';

const App = () => (
  <Router>
    <Nav/>
    <Body/>
  </Router>
);

export default App;
