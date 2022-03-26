import clsx from 'clsx'
import { useEffect, useState} from 'react'
import Content from './content/Content'
import styles from './Home.module.scss'
function Home(){
    const [count, setCount] = useState(2)
    function handleSlideEffect(){
        const slideEffect =  document.querySelector(`.${styles.slideEffect}`)
        slideEffect.classList.remove(styles.activeSlide)
        void slideEffect.offsetWidth;
        slideEffect.classList.add(styles.activeSlide)
    }
    function handleOverlayEffect(){
        const overlayEffect =  document.getElementsByClassName(styles.animateOverlay) 
        for (let i = 0; i < overlayEffect.length; i++) {
            overlayEffect[i].classList.remove(styles.active)
            void overlayEffect[i].offsetWidth;
            overlayEffect[i].classList.add(styles.active)
        }
    }
    function changeBackground(){
        const img = document.getElementById('slide' + count)
        const urlImg = img.getAttribute("src");    
        const backGround = document.querySelector(`.${styles.backGround}`)                    
        backGround.style.backgroundImage = `url(${urlImg})`;
    }
    function changeLabel(){
        const labelList = document.querySelectorAll(`.${styles.manualBtn}`)
        const activeLabel = document.querySelector(`.${styles.manualBtn}.${styles.activeManual}`)        
        for(let i = 0; i < labelList.length; i++){
            if(Number(labelList[i].textContent) === count){
                labelList[i].classList.add(styles.activeManual)
                activeLabel.classList.remove(styles.activeManual)
            }
        }
    }
    function nextSlide(){  
        changeLabel()
        count >= 3 ? setCount(1) : setCount(prev => prev + 1)            
        const radio = document.getElementById(`${styles[`radio${count}`]}`)                                
        if(radio) radio.checked = true
        changeBackground()
        handleSlideEffect()
        handleOverlayEffect()
    }    
    useEffect(()=>{
        const backGround = document.querySelector(`.${styles.backGround}`)                    
        backGround.style.backgroundImage = 'url(https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/grookey.jpg)';                                            
    }, [])
    return (
        <>        
            <div className={styles.overlay}>
                <div className={styles.backGround}>
                    <div className={styles.overlayPart}><div className={styles.animateOverlay}></div></div>
                    <div className={styles.overlayPart}><div className={styles.animateOverlay}></div></div>
                    <div className={styles.overlayPart}><div className={styles.animateOverlay}></div></div>
                    <div className={styles.overlayPart}><div className={styles.animateOverlay}></div></div>
                    <div className={styles.overlayPart}><div className={styles.animateOverlay}></div></div>
                </div>
            </div>
            <Content radio={{
                    "count": count,
                    "next": nextSlide
                }
           }/>       
            <div className={styles.navigationManual}>
                <label className={clsx(styles.manualBtn, styles.activeManual)}>01</label>
                <label className={styles.manualBtn}>02</label>
                <label className={styles.manualBtn}>03</label>
            </div>     
            <div className={styles.slider}>
                <div className={styles.slideEffect}></div>
                <div className={styles.slides}>
                    <input type={"radio"} name={"radio-btn"} id={styles.radio1}/>
                    <input type={"radio"} name={"radio-btn"} id={styles.radio2}/>
                    <input type={"radio"} name={"radio-btn"} id={styles.radio3}/>

                    <div className={clsx(styles.slide, styles.first)}>
                        <img id='slide1' src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/grookey.jpg"/>
                    </div>
                    <div className={styles.slide}>
                        <img id='slide2' src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/scorbunny.jpg"/>
                    </div>
                    <div className={styles.slide}>
                        <img id='slide3' src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/sobble.jpg"/>
                    </div>
                </div>                
            </div> 
        </>
    )
}
export default Home