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
        <li className='col'>
            <Link to={`/pokedex/${pokedex.id}`} className='pokedex-card' >

                <h3> {pokedex.name}</h3>
                <img src={pokedex.sprites?.other.dream_world.front_default} alt="" />
                <p><b> Height: </b>{pokedex.height}</p>
                <p><b> Weight: </b>{pokedex.weight}</p>
                <p><b> Exp: </b>{pokedex.base_experience}</p>
                <p><b> Type: </b>{pokedex.types?.[0]?.type.name}/{pokedex.types?.[1]?.type.name}</p>

            </Link>
        </li>
    );
};

export default PokedexCard;