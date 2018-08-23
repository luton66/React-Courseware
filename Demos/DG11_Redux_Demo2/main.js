// // Make imports so that the react and react-dom libraries can be used
// import React from 'react';
// import ReactDOM from 'react-dom';

// // Use ReactDOM's render method to specify some HTML to display
// // and also a target div to display it in
// ReactDOM.render(
//   <h1>Hello, World!</h1>,
//   document.querySelector('#app')
// );

// Demo Instructions Part 18

// import store from './store/store.js';
// import { addArticle } from './actions/actions.js';

// window.store = store;
// window.addArticle = addArticle;

// Redux store exposes simple API for managing state
// Most important methods are
//  1) getState - for accessing current state of application
//  2) dispatch - for dispatching an action
//  3) subscribe - for listening to state changes

// Demo Instructions Part 26
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);