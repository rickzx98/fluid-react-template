/* eslint-disable import/default */

import './index.scss';

import configureStore, { history } from './store/configureStore';

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import Root from './components/RootPage/Root';
import { SecurityActions } from './components/Security/';
import { render } from 'react-dom';

require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();
store.dispatch(SecurityActions.loadCurrentUser()); // load authenticated user
render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/RootPage/Root', () => {
    const NewRoot = require('./components/RootPage/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
