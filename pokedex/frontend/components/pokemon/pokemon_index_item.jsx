import React from 'react';
import { Link } from 'react-router-dom';


export const PokemonIndexItem = (({pokemon}) => {
return (
  <li><img src={pokemon.image_url}/><Link to={`/pokemon/${pokemon.id}`}> {pokemon.name} </Link></li>
  )
}
);
