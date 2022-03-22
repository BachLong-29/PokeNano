import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route, useParams, Link, Outlet } from "react-router-dom";
import NewImage from '../../../NewImage/NewImage';
import SlideNanoblock from '../../../SlideNanoblock/SlideNanoblock'

export const PokemonContext = createContext()
const Pokemon = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState()
  const [mount, setMount] = useState(false)
  function Handlemount(){
    setMount(!mount)
  }
  useEffect(() => {
    const getPokemon = async() => {
      const res = await axios.get(`http://localhost:3001/pokemon/${id}`)
      setPokemon(res.data)
    }
    getPokemon()
  }, [])
  return (
    <PokemonContext.Provider value={pokemon}>
      <div className='pokemon'>
          <button
            onClick={Handlemount}
          >Add Imgaes</button>
          {mount && <NewImage id={id}/>}
          {pokemon &&
            <div>
              <h1>{pokemon.name.english}</h1>
              <p>{pokemon.description}</p>
              <div className='pokemonContent'>
                <img
                  src={pokemon.hires}
                />
                <div className='pokedexData'>
                  <h2>Pokédex data</h2>
                  <div>National No. {pokemon.id}</div>
                  <div>Type {pokemon.type.map((pType)=>{
                    return <span key={pType} className={pType}>{pType}</span>
                  })}</div>
                  <div>Species {pokemon.species}</div>
                  <div>Generation {pokemon.gen}</div>
                </div>            
              </div>
              <h3>Nanoblocks</h3>
                <div className='imgNano'>              
                    <SlideNanoblock/>                  
                </div>
              <div>            
              </div>
            </div>
          }
        </div>
    </PokemonContext.Provider>    
  )
}

export default Pokemon
