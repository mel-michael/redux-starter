import { store } from './store/store';
import { addIngredient } from './actions/ingredients';
import { addRecipe } from './actions/recipes';

store.dispatch(addIngredient('Akara', 'beans', 5));
store.dispatch(addRecipe('Pancake'));

console.log(store.getState());

window.store = store;

