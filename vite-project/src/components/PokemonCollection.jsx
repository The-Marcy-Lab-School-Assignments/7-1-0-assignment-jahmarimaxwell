import { useContext } from 'react';
import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';


// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    const allPokemon = useContext(PokemonContext).allPokemon;
    console.log(allPokemon)

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name}
                    frontImage={pokemon.front} backImage={pokemon.back} hp={pokemon.hp}/>)}
        </div>
    )
}


export default PokemonCollection;