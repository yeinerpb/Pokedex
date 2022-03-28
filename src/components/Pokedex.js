import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexCard from './PokedexCard';

const Pokedex = () => {

    const userName = useSelector(state => state.userName)
    const navigate= useNavigate();

    const [pokedex, setPokedex] = useState([]);
    const [pokemonName, setPokemonName] = useState("")
    const [pokemonType, setPokemonType] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126')
            .then(res => setPokedex(res.data.results));

        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res => setPokemonType(res.data.results));
    }, [])

    const submit = e => {
        e.preventDefault();
        navigate(`/pokedex/${pokemonName}`)
    }
    const typePokemon = e =>{
        console.log(e.target.value);
        axios.get(e.target.value)
            .then(res=> setPokedex(res.data.pokemon))

    }
   
    return (
        <div className='beginning'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
            <h2 className='welcome'><b> Bienvenido <span> {userName}</span></b></h2>
            <div className="select">
                <select className='type-pokemon' onChange={typePokemon}>
                    <option>Filtrar por tipo</option>
                    {
                        pokemonType.map(pokemonType => (
                            
                            <option key={pokemonType.url} value={pokemonType.url}>
                                {pokemonType.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <form className="info-container" onSubmit={submit}>
                <label htmlFor="">  </label>
                <input
                    type="text"
                    id="pokedex.name"
                    value={pokemonName}
                    onChange={e => setPokemonName(e.target.value)}
                    placeholder='Buscar por nombre'
                />
                <button>Buscar</button>
            </form>

            <ul className='pokedex-list'>
                {
                    pokedex.map(pokedex => (
                        < PokedexCard
                            pokedexUrl={pokedex.url ? pokedex.url : pokedex.pokemon?.url}
                            key={pokedex.name}
                        />
                    ))
                }
            </ul>

        </div>
    );
};

export default Pokedex;