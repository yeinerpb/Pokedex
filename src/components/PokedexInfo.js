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
        <div className='info'>
            <h1>{pokedex.name}</h1>
            <img src={pokedex.sprites?.other.dream_world.front_default} alt="" />
            <p><b> Height: </b>{pokedex.height}</p>
            <p><b> Weight: </b>{pokedex.weight}</p>
            <p><b> Exp: </b>{pokedex.base_experience}</p>
            <p><b> Type: </b>{pokedex.types?.[0]?.type.name}/{pokedex.types?.[1]?.type.name}</p>
        </div>
    );
};

export default PokedexInfo;