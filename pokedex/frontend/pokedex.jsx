import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon,requestAllPokemon} from './actions/pokemon_actions.js';
import * as Util from './util/api_util.js';
import configureStore from './store/store';
import Root from './components/root';
import {selectAllPokemon} from './reducers/selectors.js';

// window.store = store;
// window.dispatch = store.dispatch;
// window.getState = store.getState;
// window.fetchAllPokemon = Util.fetchAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, root);
});
