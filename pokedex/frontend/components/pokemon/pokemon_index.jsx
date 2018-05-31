import React from 'react';
import PokemonDetailContainer from './pokemon_detail_container';
import {PokemonIndexItem} from './pokemon_index_item';
import {Route} from 'react-router-dom';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    const {pokemon} = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke}/>)
    return(
      <div>
        <h1> Pokemons </h1>

        <ul>
          {
            <Route path="/pokemon/:id" component={PokemonDetailContainer}/>
          }
          {pokemonItems}
        </ul>
      </div>
    )
  }

}


export default PokemonIndex;
