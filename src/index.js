import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import DevTools from './devTools';

render (
    <Provider store={store}>
        <h1>Inicjalizacja projektu</h1>
        <DevTools />
    </Provider>,
    document.getElementById('root')
);