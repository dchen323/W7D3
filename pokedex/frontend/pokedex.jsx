import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon,requestAllPokemon} from './actions/pokemon_actions.js';
import * as Util from './util/api_util.js';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors.js';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchAllPokemon = Util.fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;

  window.selectAllPokemon = selectAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
