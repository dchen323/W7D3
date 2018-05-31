import {combineReducers} from 'redux';
import pokemonReducer from "./pokemon_reducer";
import {itemsReducer} from "./item_reducer";


export const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer
});
