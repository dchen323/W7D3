
import React from 'react';
import PokemonDetailContainer from './pokemon_detail_container';
import {PokemonDetailsItem} from './pokemon_detail_item';

class PokemonDetail extends React.Component {

  componentDidMount() {
    const pokemon_id = this.props.match.params.id
    this.props.requestPokemon(pokemon_id);
  }


  render() {
    //need if statement because requestPokemon is asychronous
    if (this.props.pokemon === undefined) {
      return <h1>loading</h1>
    }
    const {pokemon, items} = this.props;
    return(
      <div>
        <li><img src={pokemon.image_url}/>{pokemon.name}></li>
      </div>
    )
  }

}


export default PokemonDetail;
