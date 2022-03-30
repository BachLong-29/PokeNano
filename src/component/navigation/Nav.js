import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.scss'
function Nav(){    
    console.log(styles);
    // Scroll Event
    useEffect(() => {          
        const handleSticky = () =>{
            const header = document.querySelector('header');
            header.classList.toggle(styles.sticky, window.scrollY)
        }
        window.addEventListener('scroll', handleSticky)
    }, [])
    function toggleMenu(){
        const menuToggle = document.querySelector(`.${styles.menuToggle}`);
        const navigation = document.querySelector(`.${styles.navigation}`);
        menuToggle.classList.toggle(styles.activeMenu);
        navigation.classList.toggle(styles.activeNav);
    }
    return (
        <>                    
        <header>
            <Link to="/" className={styles.logo}>PokéNano<span>.</span></Link>
            <div className={styles.menuToggle} onClick={toggleMenu}></div>
            <ul className={styles.navigation}>
                <li><Link className={styles.link} to="/">Home</Link></li>
                <li><Link className={styles.link} to="/about">About</Link></li>
                <li><Link className={styles.link} to="/collection">Collection</Link></li>
                <li><Link className={styles.link} to="/intention">Intention</Link></li>
                <li><Link className={styles.link} to="/background">Background</Link></li>
            </ul>
        </header>
            {/* <div className={styles.navigation}>
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
            </div> */}
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