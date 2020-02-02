import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { updateQuote, updateSpecView } from './redux/reducers';

// App
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store
const   rootReducer = combineReducers({ updateQuote, updateSpecView }),
        store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
