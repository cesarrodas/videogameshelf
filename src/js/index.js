import '../../polyfills/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './store';

require('../styles/styles.scss');

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, document.getElementById('app'));
