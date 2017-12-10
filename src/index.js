import React from 'react'
import ReactDOM from 'react-dom'

import AppLayout from './components/App';

import {Provider} from 'react-redux';
import store from './core/store';

ReactDOM.render(
    <Provider store={store}>

        <AppLayout />
    </Provider>,
    document.getElementById('root')
);
