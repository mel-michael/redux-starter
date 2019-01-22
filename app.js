import { createStore } from 'redux';

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

// const addIngredient = (recipe, name, quantity) => ({ 
// 	type: 'ADD_INGREDIENT', recipe, name, quantity
// });

const addIngredient = (recipe, name, quantity) => ({ 
	type: 'ADD_INGREDIENT', recipe, name, quantity
});

store.dispatch(addIngredient('Omelette', 'Eggs', 3));

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_RECIPE':
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

const store = createStore(reducer, initialState);

window.store = store;

// store.subscribe(() => document.getElementById('counter').innerText = store.getState());

// setInterval(() => store.dispatch({ type: 'INC' }), 500);

// console.log("Redux started");




// store.dispatch({ type: 'ADD_RECIPE', name: 'Pancake' })

