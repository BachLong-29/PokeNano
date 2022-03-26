import React, { createContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import NewImage from './newImage/NewImage';
import SlideNanoblock from './slideNanoblock/SlideNanoblock'
import styles from './Pokemon.module.scss'
import axios from 'axios';

export const PokemonContext = createContext()
const Pokemon = () => {
  let { id } = useParams();
  const [pokemon, setPokemon] = useState()
  const [mount, setMount] = useState(false)
  const api = 'http://localhost:3001/pokemon/'
  function handleMount(){
    setMount(!mount)
  }
  // Get pokemon by id
  useEffect(() => {
    const getPokemon = async() => {
      const res = await axios.get(`${api}${id}`)
      setPokemon(res.data)
    }
    getPokemon()
  }, [])
  return (
    <PokemonContext.Provider value={pokemon}>
      <div className={styles.pokemon}>
          <button
            onClick={handleMount}
          >Add Imgaes</button>
          {mount && <NewImage id={id}/>}
          {pokemon &&
            <div>
              <h1>{pokemon.name.english}</h1>
              <p>{pokemon.description}</p>
              <div className={styles.pokemonContent}>
                <img
                  src={pokemon.hires}
                />
                <div className={styles.pokedexData}>
                  <h2>Pokédex data</h2>
                  <div>National No. {pokemon.id}</div>
                  <div>Type {pokemon.type.map((pType)=>{
                    return <span key={pType} className={styles[pType]}>{pType}</span>
                  })}</div>
                  <div>Species {pokemon.species}</div>
                  <div>Generation {pokemon.gen}</div>
                </div>            
              </div>
              <h3>Nanoblocks</h3>
                <div className={styles.imgNano}>              
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
