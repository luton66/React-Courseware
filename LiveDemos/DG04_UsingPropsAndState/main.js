import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <App headerProp="Header from attribute" numberProp={parseInt("101", 10)} />,
  document.querySelector('#app')
);
