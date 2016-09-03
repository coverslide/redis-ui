'use strict';

import './vendors';
import './scripts/load-css';
import './scripts/register-module-paths';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import Root from 'components/Root';
import createStore from './store';

const store = createStore({
  ui: {
    loading: false,
  },
  redis: {
    currentConnection: null,
    connections: [],
    results: [],
  },
  connection: {
    connections: [],
    currentConnection: null,
  },
});

function Main() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

render(<Main />, document.getElementById('main'));
