import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexInfo = () => {

    const { id } = useParams();
    const [ pokedex, setPokedex ] = useState([]);
    useEffect(() =>{
        axios.get(` https://pokeapi.co/api/v2/pokemon/${ id }/ `)
       
            .then(res => setPokedex(res.data));
    }, [ id ])

    return (
        <div>
            <h1>{pokedex.name}</h1>
            <img src={pokedex.sprites?.other.dream_world.front_default} alt="" />
            <p>Height: {pokedex.height}</p>
            <p>Weight: {pokedex.weight}</p>
        </div>
    );
};

export default PokedexInfo;