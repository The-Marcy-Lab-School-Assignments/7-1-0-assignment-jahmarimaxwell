import { useState, useEffect } from "react";
import handleFetch from '../utils/handleFetch';
import PokemonContext from "./PokemonContext";

// TODO: Import the PokemonContext

const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState();
    const [error, setError] = useState('')

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        // Function to handle the fetching of GIFs
        const doFetch = async () => {
            // Calling the handleFetch function to get data from the Giphy API
            const [data, error] = await handleFetch(`http://localhost:4000/pokemon`);
            console.log(data)
            // If data is successfully fetched, update the data state
            if (data) setAllPokemon(data);
            // If an error occurs, update the error state
            if (error) setError(error.message);
            // console.log(data)

        }
        doFetch(); // Trigger the fetch operation
    }, []); // Empty dependency array ensures this effect runs only once on component mount
    console.log(allPokemon);



    // TODO: Add values to be included in the context here
    let contextValues = {
        allPokemon, 
        setAllPokemon
    }

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <PokemonContext.Provider value={contextValues}>
         { children }
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;
