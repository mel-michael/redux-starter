import { ADD_RECIPE } from '../constants/action-types';

export const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat({name: action.name});
  }
  return recipes;
}
