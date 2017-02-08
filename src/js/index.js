import '../../polyfills/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Hello from './components/heyfile';
import store from './store';

require('../styles/styles.scss');

ReactDOM.render(<Provider store={store}>
  <Hello />
  </Provider>, document.getElementById('app'));
