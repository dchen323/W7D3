import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail.jsx';
import {requestPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state,ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (pokemon) => dispatch(requestPokemon(pokemon))
});


export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetail);
