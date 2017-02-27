import '../../polyfills/polyfills';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import Home from './components/home';
import Collection from './components/collection';
import store from './store';

require('../styles/styles.scss');

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path="/" component={Home}></Route>
      <Route path="/collection" component={Collection}></Route>
      <IndexRoute component={Home}></IndexRoute>
    </Router>
  </Provider>,
  document.getElementById('app')
);
