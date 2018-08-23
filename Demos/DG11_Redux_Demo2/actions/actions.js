// Demo Instruction 10
// export const addArticle = article => ({
//     type: "ADD_ARTICLE",
//     payload: article
// });

// type property nothing more than a string
// Reducer uses string to determine how to calculate next state
// Better to have action types declared as constants as strings are prone to typos and duplication

// Demo Instruction 14
import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});
