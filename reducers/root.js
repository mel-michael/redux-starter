import { combineReducers } from 'redux';

// Method 1: Combine all reducer functions
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      // Wrong Way because it mutates the store
      // state.recipes.push({ name: action.name });
      return Object.assign({}, state, {
        recipes: state.recipes.concat({ name: action.name })
      });

    case 'ADD_INGREDIENT':
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        qty: action.quantity
      };
      return Object.assign({}, state, {
        ingredients: state.ingredients.concat(newIngredient)
      });
  }
  return state;
}

// Method 2: Separate each reducer function
export const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return recipes.concat({ name: action.name });
  }
  return recipes;
}

export const ingredientsReducer = (ingredients = [], action) => {
  switch(action.type) {
    case 'ADD_INGREDIENT':
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        qty: action.quantity
      };
      return ingredients.concat(newIngredient);
  }
  return ingredients;
};

export const rootReducer = (state, action) => {
  return Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action)
  });
};

// Method 3: Use Redux combine reducers
export default combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
});
