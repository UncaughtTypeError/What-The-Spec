import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import RouterErrorBoundry from './errorboundries/RouterErrorBoundry';
import Nav from './components/Nav';

const Home = lazy(() => import('./routes/Home')),
      CSS = lazy(() => import('./routes/CSS')),
      HTML = lazy(() => import('./routes/HTML')),
      Javascript = lazy(() => import('./routes/Javascript'));

const App = () => (
  <Router>
    <Nav/>
    <RouterErrorBoundry>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path={'/css'} component={CSS}/>
          <Route path={'/html'} component={HTML}/>
          <Route path={'/javascript'} component={Javascript}/>
        </Switch>
      </Suspense>
    </RouterErrorBoundry>
  </Router>
);

export default App;
