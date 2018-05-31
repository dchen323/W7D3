import values from 'lodash/values';

export const selectAllPokemon = (state) => (
    Object.values(state.entities.pokemon)
);

export const selectItems = (state) => (
    Object.values(state.entities.pokemon.items)
);
