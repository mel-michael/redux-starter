import { createStore } from 'redux';

import { reducer } from '../reducers/root';

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

export const store = createStore(reducer, initialState);
