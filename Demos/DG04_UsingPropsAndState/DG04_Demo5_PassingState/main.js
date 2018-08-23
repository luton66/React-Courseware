import React from 'react';
import ReactDOM from 'react-dom';

// Import the App component from the App.jsx file
import App from './App';

ReactDOM.render(
  // Note that to use a value/expression, use {} notation
  <App />,
  document.querySelector('#app')
);
