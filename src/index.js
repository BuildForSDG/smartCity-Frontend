import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import rootSaga from './store/sagas';
import App from './App';

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <Router hashType='noslash'>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
