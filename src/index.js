import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store/index';
import  routes from './routes';
import DevTools from './devTools';
//import Navigation from './presentational/navigation.component';


ReactDOM.render(
    <Provider store={store}>
        <>
            <Router history={hashHistory} routes={routes} />
            
            <DevTools />
        </>
    </Provider>, 
    document.getElementById('root')
);
