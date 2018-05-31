import * as APIUtil from '../util/api_util.js';


export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";


export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = ({pokemon, items})  => ({
  type: RECEIVE_POKEMON,
  pokemon,
  items
});


export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemon = (pokemon) => (dispatch) => (
  APIUtil.fetchPokemon(pokemon).then(res => dispatch(receivePokemon(res)))
);
