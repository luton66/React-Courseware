import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer.js';

// createStore takes a reducer as the first argument
// an optional argument of the initial state can also be passed
// more useful in server-side rendering
// state comes from the reducers

const store = createStore(rootReducer);

export default store;

