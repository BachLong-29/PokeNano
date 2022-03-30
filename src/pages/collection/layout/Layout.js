import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styles from './Layout.module.scss'
import axios from 'axios';
import pokeApi from "../../../api/pokeApi";
function Layout(){    
    const [pokemons, setPokemons] = useState([])
    const [showGoToTop, setshowGoToTop] = useState(false)
    const [gen, setGen] = useState('All')  
    // const api = 'http://localhost:3001/pokemon/'
    function page_scroll2top(){
		document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
	}
    const handleChangeGen = (e) => {
        const genTarget = e.target.value
        genTarget == "All" ? setGen("All") : setGen(genTarget.slice(4, genTarget.length))        
    }    
    const handleFilter = (e) => {
        const genPoke = document.querySelectorAll(`.${styles.pokeTag}`)
        const value = e.target.value.toLowerCase()
        genPoke.forEach(tag => {            
            const filter = tag.getAttribute('data-search').toLowerCase()
            const currentGen = tag.getAttribute('data-gen')
            if(gen === 'All'){
                if(filter.indexOf(value) > -1){
                    tag.style.display = 'flex';
                }else{
                    tag.style.display = 'none';
                };  
            }else if(filter.indexOf(value) > -1 && currentGen === gen){
                tag.style.display = 'flex';
            }else{
                tag.style.display = 'none';
            };            
        })
    }
    // Control gen filter
    useEffect(()=>{
        const genPoke = document.querySelectorAll(`.${styles.pokeTag}`)
            genPoke.forEach(tag =>{
                if(gen === "All"){
                    tag.style.display = 'flex'
                }
                else{
                    if(tag.getAttribute('data-gen') === gen){
                        tag.style.display = 'flex'
                    }
                    else{
                        tag.style.display = 'none'
                    }
                }
            })
    }, [gen])
    // Get pokemons from server
    useEffect(() => {     
        const getPokemon = async() => {
            // const res = await axios.get(api)            
            const res = await pokeApi.getPokemonList()
            setPokemons(res.data)
        }
        getPokemon()
    }, []) 
    // Create gotoTop btn
    useEffect(() => {
        const handleScroll = () => {
            setshowGoToTop(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])
    // Set title
    useEffect(() => {
        document.title = 'Collection'
    }, [])
   
    return (
        <div>                                   
            <div className={styles.bigFrame}>
                <div className={styles.filter}>
                    <select id="select-gen"
                        onChange={handleChangeGen}
                    >
                        <option>All</option>
                        <option>Gen I</option>
                        <option>Gen II</option>
                        <option>Gen III</option>
                        <option>Gen IV</option>
                        <option>Gen V</option>
                        <option>Gen VI</option>
                        <option>Gen VII</option>
                        <option>Gen VIII</option>
                    </select>
                    <input
                        className={styles.search}
                        placeholder='Ex: bulbasaur'
                        onChange={handleFilter}
                    />
                </div>
                {
                    showGoToTop && (
                        <button
                            className={styles.btnTop}
                            onClick={page_scroll2top}
                        >
                            <FontAwesomeIcon icon={faArrowUp}/>
                        </button>
                    )
                }
                <div className={styles.pokemonBox}>
                {
                    pokemons.map((pokemon)=>{
                        return (
                            <div key={pokemon.id} data-search={pokemon.name.english} data-gen={pokemon.gen} className={styles.pokeTag}>
                                {pokemon.image == '' ? <img src={pokemon.sprite}/>:<img src={pokemon.image}/>}
                                <Link style={{
                                    color: '#4c3c9c',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                }} to={{
                                    pathname: `${pokemon.id}`
                                }}
                                className={styles.pokeName}
                                >{pokemon.id} {pokemon.name.english}</Link>
                            </div>
                        )
                    })
                }                    
                </div>
            </div>            
        </div>
    )
}
export default Layout