import React, { createContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NewImage from './newImage/NewImage';
import SlideNanoblock from '../pokemon/slideNanoblock/SlideNanoblock'
import styles from './Pokemon.module.scss'
import pokeApi from '../../../api/pokeApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'

export const PokemonContext = createContext()
const Pokemon = () => {
  let { id }= useParams();  
  const [pokemon, setPokemon] = useState()
  const [prvPokemon, setPrvPokemon] = useState()
  const [nxtPokemon, setNxtPokemon] = useState()
  const [mount, setMount] = useState(false)
  function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../../../assets/types', false, /\.(png|jpe?g|svg)$/));
  function handleMount(){
    setMount(!mount)
  }
  // Get pokemon by id
  useEffect(() => {
    const getPokemon = async() => {
      const res = await pokeApi.getPokemon(id)
      setPokemon(res.data)
      document.title = res.data.name.english
    }
    const getPreviousPokemon = async() => {       
      const res = await pokeApi.getPokemon((Number(id) - 1) == 0 ? 898 : Number(id) - 1)
      setPrvPokemon(res.data)
    }
    const getNextPokemon = async() => {
      const res = await pokeApi.getPokemon((Number(id) + 1) == 899 ? 1 : Number(id) + 1)
      setNxtPokemon(res.data)
    }
    getPokemon()
    getPreviousPokemon()
    getNextPokemon()
  }, [])
  useEffect(() => {
    const getPreviousPokemon = async() => {       
      const res = await pokeApi.getPokemon((Number(id) - 1) == 0 ? 898 : Number(id) - 1)
      setPrvPokemon(res.data)
    }
    const getNextPokemon = async() => {
      const res = await pokeApi.getPokemon((Number(id) + 1) == 899 ? 1 : Number(id) + 1)
      setNxtPokemon(res.data)
    }
    getPreviousPokemon()
    getNextPokemon()
  }, [pokemon])
  const handlePreviousPokemon = () => {
    setPokemon(prvPokemon)    
  }
  const handleNextPokemon = () => {
    setPokemon(nxtPokemon)
  }
  return (
    <PokemonContext.Provider value={pokemon}>
      <div className={styles.pokemon}>
          <div className={styles.button}>
            <button
              onClick={handleMount}
            >Add Imgaes</button>
          </div>
          {mount && <NewImage id={id}/>}
          {pokemon && prvPokemon && nxtPokemon &&
            <div className={styles.information}>
              <div className={styles.prevAndNext}>
                <div className={styles.previous}>
                  <Link onClick={handlePreviousPokemon} style={{                    
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}  
                    to={{
                      pathname: `/collection/${prvPokemon.id}`
                    }}
                  >
                  <FontAwesomeIcon icon={faCaretLeft} size="sm" /> {prvPokemon.name.english} #{prvPokemon.id}</Link>
                </div>
                <div className={styles.next}>
                <Link onClick={handleNextPokemon} style={{
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}  
                    to={{
                      pathname: `/collection/${nxtPokemon.id}`
                    }}
                  >{nxtPokemon.name.english} #{nxtPokemon.id} <FontAwesomeIcon icon={faCaretRight} size="sm" /></Link>
                </div>
              </div>
              <div className={styles.currentPokemon}>
                  <span>{pokemon.id}</span>
                  <span>{pokemon.name.english}</span>
              </div>
              <div className={styles.pokeAva}>
                <div className={styles.type}>
                  <div className={styles.pokemonType}>Type</div>
                  {pokemon.type.map((pType)=>{
                    return (
                      <span key={pType} className={styles[pType]}>
                        <img
                          className={styles.typeIcon}
                          src={images[`${pType}.svg`]}
                          />
                        {pType}
                      </span>
                    )
                  })}
                  <div className={styles.pokemonSpecies}>Species</div>
                  <span>{pokemon.species}</span>
                </div>
                <div className={styles.avatar}>
                  <img
                    src={pokemon.hires}
                  />
                  <div className={styles.bigCircle}></div>
                  <div className={styles.smallCircle}></div>
                  <div className={styles.tinyCircle}></div>
                </div>
                <div className={styles.profiles}>
                  <div className={styles.pokemonProfiles}>Profiles</div>
                  <div className={styles.heightWeight}>
                    <span>
                      <img 
                        src={images['height.png']}
                        height = "40px"
                        width= "40px"
                        />
                        {pokemon.profile.height}
                    </span>
                    <span>
                      <img 
                        src={images['weight.png']}
                        height = "40px"
                        width= "40px"
                        />
                        {pokemon.profile.weight}
                    </span>
                  </div>
                  <div className={styles.gender}>                    
                    {pokemon.profile.gender !== 'Genderless' ? <div>
                      <span>
                        <img
                            src={images['female.png']}
                            height = "40px"
                            width= "40px"
                        />
                        {pokemon.profile.gender.slice(pokemon.profile.gender.indexOf(':') + 1, pokemon.profile.gender.length)} %
                      </span>
                      <span>
                        <img
                          src={images['male.png']}
                          height = "40px"
                          width= "40px"
                        />
                        {pokemon.profile.gender.slice(0, pokemon.profile.gender.indexOf(':'))} %
                      </span>
                    </div> : ''
                    }
                    {pokemon.profile.gender === 'Genderless' ? <span>
                      <img
                          src={images['neuter.png']}
                          height = "40px"
                          width= "40px"
                      />
                      Genderless
                    </span> : ''}
                  </div>
                  {
                    pokemon.profile.egg && <div className={styles.eggs}>
                      <span>
                        <img
                          src={images['egg.png']}  
                          height = "40px"
                          width= "50px"
                        /> {pokemon.profile.egg.join(', ')}
                      </span>
                    </div>
                  }
                  <div className={styles.ability}>
                    <span>Ability</span>
                    <div>
                      {pokemon.profile.ability.map((pAbility, index) => {
                          if(pAbility[1] === 'true'){
                            return <span key={index}>{pAbility[0]}&#40;hidden ability&#41;</span>
                          }
                          else{
                            return <span key={index}>{index + 1}. {pAbility[0]}</span>
                          }
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.description}>
                  <p style={{marginTop: '30px'}}>{pokemon.description}</p>
              </div>
              <div className={styles.Nanoblocks}>
                <h3>Nanoblocks</h3>
                <div className={styles.imgNano}>              
                    <SlideNanoblock/>                  
                </div>  
              </div>
            </div>
          }
        </div>
    </PokemonContext.Provider>    
  )
}

export default Pokemon
