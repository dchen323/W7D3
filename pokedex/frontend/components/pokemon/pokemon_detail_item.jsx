import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonDetailItem = (({pokemon}) => {
  return (
    <li><img src={pokemon.image_url}/>{pokemon.name}</li>
    
  )
})
