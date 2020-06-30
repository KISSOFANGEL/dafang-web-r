import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import './index.scss'
import * as serviceWorker from './serviceWorker';
import request from './plugin/request/index'
import db from './plugin/db/index'
import { Provider } from 'react-redux';
import store from '@/redux/store'
import {actions} from '@/redux/actions'

React.$request = request
React.db = db
React.$store = store
React.$actions = actions
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();