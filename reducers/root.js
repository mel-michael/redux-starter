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
