import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import styles from '../styles/Body.module.css';

// Components
import RouterErrorBoundry from '../errorboundries/RouterErrorBoundry';

const   Home = lazy(() => import('../routes/Home')),
        CSS = lazy(() => import('../routes/CSS')),
        HTML = lazy(() => import('../routes/HTML')),
        Javascript = lazy(() => import('../routes/Javascript')),
        NoMatch = lazy(() => import('../routes/NoMatch'));

const Body = () => (

    <RouterErrorBoundry>
        <section className={styles.base}>
            <Suspense fallback={<div className={styles.title}>Loading...</div>}>
                <Switch>
                    <Route exact path='.' component={Home}/>
                    <Route path={`${process.env.PUBLIC_URL}/css`} component={CSS}/>
                    <Route path={'./html'} component={HTML}/>
                    <Route path={'/javascript'} component={Javascript}/>
                    <Route component={NoMatch}/>
                </Switch>
            </Suspense>
        </section>
    </RouterErrorBoundry>

);

export default Body;