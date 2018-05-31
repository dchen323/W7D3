import values from 'lodash/values';

export const selectAllPokemon = (state) => (
    Object.values(state.entities.pokemon)
);
