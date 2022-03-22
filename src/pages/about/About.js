import { useEffect, useState } from "react"
import Favorite from "./favorite/Favorite"
import Passion from "./passion/Passion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

function About(){
    const [page, setPage] = useState(1)    
    function handleNextPage(){                        
        const nextPage = document.querySelector('.next-page-effect')
        page <= 1 ? setPage(prev => prev + 1) : setPage(1)
        nextPage.classList.remove('active')
        void nextPage.offsetWidth
        nextPage.classList.add('active')
        
    }
    useEffect(() => {
        console.log(page)
        const activePage = document.querySelector('.part-1:nth-child('+page+')')
        const prevActivePage = document.querySelector('.part-1.active')
        setTimeout(()=>{
            prevActivePage.classList.remove('active')
            activePage.classList.add('active')
        }, 500)
    }, [page])
    return (
        <>
            <div className="para-one">                                
                <div className="slider-about">
                    <Passion/>
                    <Favorite/>
                </div>
                <div className="next-page-effect"></div>
                <div className="part-2">
                    <div className="menu" onClick={handleNextPage}>
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                    </div>
                    <div className="page">{'0' + page}</div>
                </div>
            </div>
        </>
    )
}
export default About

