import React from 'react';
import{ render }  from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import store from './store/index';
import DevTools from './devTools';
import  routes from './routes';

render (
    <Provider store={store}>
        <>
            <Router history={hashHistory} routes={routes} />
            <DevTools />
        </>
    </Provider>, 
    document.getElementById('root')
);
