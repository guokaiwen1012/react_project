import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { Provider } from 'mobx-react';
import stores from './stores';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
