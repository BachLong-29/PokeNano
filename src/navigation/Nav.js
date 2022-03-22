import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import styles from './Nav.module.css'
function Nav(){
    const stickyBar = () => {
        window.addEventListener('scroll', () =>{
            const nav = document.querySelector('.nav-pc')            
            nav.classList.toggle('sticky', window.scrollY > 0)
        })
    }
    return (
        <>            
            <div className="nav-pc">
                <ul>
                    <li>Nanoblock</li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/">Home</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/about">About</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/collection">Collection</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/intention">Intention</Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to="/background">Background</Link>
                    </li>
                </ul>
            </div>
            <div className='sub-nav'>
                <ul>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>instagram</li>
                </ul>
            </div>
        </>
    )
}

export default Nav