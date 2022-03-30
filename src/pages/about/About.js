import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Favorite from "./favorite/Favorite"
import Passion from "./passion/Passion"
import styles from './About.module.scss'

function About(){
    const [page, setPage] = useState(1)       
    function handleNextPage(){                        
        const nextPage = document.querySelector(`.${styles.nextPageEffect}`)
        page <= 1 ? setPage(prev => prev + 1) : setPage(1)
        nextPage.classList.remove(styles.active)
        void nextPage.offsetWidth
        nextPage.classList.add(styles.active)
    }
    // Control page
    useEffect(() => {
        setTimeout(()=>{
            const activePage = document.querySelector('.partOne:nth-child('+page+')')
            const prevActivePage = document.querySelector('.partOne.active')
            prevActivePage.classList.remove('active')
            activePage.classList.add('active')
        }, 500)
    }, [page])
    // Set title
    useEffect(() => {
        document.title = 'About'
    }, [])
    return (
        <>
            <div className={styles.paraOne}>                                
                <div className={styles.sliderAbout}>
                    <Passion/>
                    <Favorite/>
                </div>
                <div className={styles.nextPageEffect}></div>
                <div className={styles.partTwo}>
                    <div className={styles.menu} onClick={handleNextPage}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </div>
                    <div className={styles.page}>{'0' + page}</div>
                </div>
            </div>
        </>
    )
}
export default About

