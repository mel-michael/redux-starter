import { createStore } from 'redux';

// import { reducer } from '../reducers/root'; // Method 1
// import { rootReducer } from '../reducers/root'; // Method 2
import mainReducer from '../reducers/root'; // Method 3

// console.log(reducer);
const initialState = {
  recipes: [
    {
      name: 'Omelete'
    }
  ],
  ingredients: [
    {
      recipe: 'Omelette',
      name: 'Egg',
      qty: 3
    }
  ]
};

export const store = createStore(mainReducer, initialState);
