import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './router';
import store from './store';

import { PopupCenter } from './views';

import './assets/scss/_styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
      <PopupCenter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
