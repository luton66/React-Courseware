import { createStore, applyMiddleware } from 'redux';

// Allows writing of action creators that return a function instead of an action
// Can be used to delay the dispatch of an action or to dispatch only if a certain condition is met
// Inner function receives store methods dispatch and getState as parameters
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

//export const store = createStore(rootReducer);

export const store = createStore(rootReducer, applyMiddleware(thunk));
