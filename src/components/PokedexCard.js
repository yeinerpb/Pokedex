import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokedexCard = ({pokedexUrl}) => {
    
    const [pokedex, setPokedex] = useState({});

    useEffect(() => {
        axios.get(pokedexUrl).then((res) => setPokedex(res.data))
    }, [pokedexUrl])

    console.log(pokedex);
    return (
        <li className='pokedex.card'>
            <Link to = {`/pokedex/${pokedex.id}`}>
              {pokedex.name}           
            </Link>
            <img src={pokedex.sprites?.other.dream_world.front_default} alt="" />
            <p>Height: {pokedex.height}</p>
            <p>Weight: {pokedex.weight}</p>
            <p>Exp: {pokedex.base_experience}</p>
        </li>
    );
};

export default PokedexCard;