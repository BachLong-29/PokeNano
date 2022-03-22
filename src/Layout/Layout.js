import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from "react"
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Layout(){      
    const [pokemons, setPokemons] = useState([])
    const [gen, setGen] = useState('All')  
    const [showGoToTop, setshowGoToTop] = useState(false)
    function page_scroll2top(){
		document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
	}
    const handleChangeGen = (e) => {
        if(e.target.value == "All") setGen("All")
        else setGen(e.target.value.slice(4, e.target.value.length))
    }    
    const handleFilter = (e) => {
        const genPoke = document.querySelectorAll('.poke-tag')
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
            }else if(filter.indexOf(value) > -1 && currentGen == gen){
                tag.style.display = 'flex';
            }else{
                tag.style.display = 'none';
            };            
        })
    }
    useEffect(()=>{
        const genPoke = document.querySelectorAll('.poke-tag')
        if(genPoke){
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
        }
    }, [gen])
    useEffect(() => {     
        const getPokemon = async() => {
            const res = await axios.get(`http://localhost:3001/pokemon/`)            
            setPokemons(res.data)
          }
          getPokemon()
    }, []) 
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            setshowGoToTop(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <div>                                   
            <div className="big-frame">
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
                </select>
                <label htmlFor='search'>Search</label>
                <input
                    id='search'
                    placeholder='Ex: bulbasaur'
                    onChange={handleFilter}
                />
                {
                    showGoToTop && (
                        <button
                            id='btn-top'                            
                            onClick={page_scroll2top}
                        >
                            <FontAwesomeIcon icon={faArrowUp}/>
                        </button>
                    )
                }
                <div className="pokemon-box">
                {
                    pokemons.map((pokemon)=>{
                        return (
                            <div key={pokemon.id} data-search={pokemon.name.english} data-gen={pokemon.gen} className='poke-tag'>
                                {pokemon.image == '' ? <img src={pokemon.sprite}/>:<img src={pokemon.image}/>}
                                <Link style={{
                                    color: '#4c3c9c',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                }} to={{
                                    pathname: `${pokemon.id}`,                                        
                                }}
                                >{pokemon.name.english}</Link>
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