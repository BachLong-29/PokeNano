import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'
function Nav(){    
    // Scroll Event
    useEffect(() => {
        const handleSticky = () =>{
            const navigation = document.querySelector(`.${styles.navigation}`)
            navigation.classList.toggle(styles.sticky, window.scrollY > 0)
        }
        window.addEventListener('scroll', handleSticky)
    }, [])
    return (
        <>            
            <div className={styles.navigation}>
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
            <div className={styles.subNav}>
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