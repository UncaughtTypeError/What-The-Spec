import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

// Components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => (

  <Router basename='/'>
    <Header/>
    <Body/>
    <Footer/>
  </Router>

);

export default App;
