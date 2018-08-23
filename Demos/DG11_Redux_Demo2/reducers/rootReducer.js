// Demo Instruction 7 - populate the reducer
// const initialState = {
//     articles: []
// };

// This reducer is very simple - it simply returns the initial state!
// const rootReducer = (state = initialState, action) => state;

// export default rootReducer;

// Demo Instruction 15
import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
    articles: []
};

// As reducer takes state and an action, need to be able to select action
// Use switch statement to manipulate state depending on action

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            //state.articles.push(action.payload);
            //return state;
            // Line 24 is bad as it mutates the state object, breaking a Redux principle
            // Better to use the spread operator - leaves initial state intaact
            // Initial articles array will not change in place - resulting state is copy of initial state
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            };
            // Object spread operator still in stage 3
            // Babel has object-rest-spread-transform to avoid SyntaxErrors   
        default:
            return state;
    }
}

export default rootReducer;

// Note: as reducer will grow as app becomes bigger
// Can separate reducers into separate functions and combine with combineReducers to create
// single reducer js file
