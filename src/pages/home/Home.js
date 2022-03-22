import { useEffect, useLayoutEffect, useState} from 'react'
import Content from './content/Content'
function Home(){
    const [count, setCount] = useState(2)
    function handleContentEffefct(){
        const contentEffect =  document.querySelector('.content')
        contentEffect.classList.remove('active')
        void contentEffect.offsetWidth;
        contentEffect.classList.add('active')
    }
    function handleSlideEffect(){
        const slideEffect =  document.querySelector('.slide-effect')
        slideEffect.classList.remove('active')
        void slideEffect.offsetWidth;
        slideEffect.classList.add('active')
    }
    function handleOverlayEffect(){
        const overlayEffect =  document.getElementsByClassName('animate-overlay')                        
        for (let i = 0; i < overlayEffect.length; i++) {
            overlayEffect[i].classList.remove('active')
            void overlayEffect[i].offsetWidth;
            overlayEffect[i].classList.add('active')
        }
    }
    function changeBackground(){
        const img = document.getElementById('slide' + count)
        const urlImg = img.getAttribute("src");    
        const backGround = document.querySelector('.back-ground')                    
        backGround.style.backgroundImage = `url(${urlImg})`;
    }
    function changeLabel(){
        const labelList = document.querySelectorAll('.manual-btn')
        const activeLabel = document.querySelector('.manual-btn.active')        
        for(let i = 0; i < labelList.length; i++){
            if(Number(labelList[i].textContent) === count){
                labelList[i].classList.add('active')
                activeLabel.classList.remove('active')
            }
        }
    }
    function nextSlide(){  
        changeLabel()
        count >= 3 ? setCount(1) : setCount(prev => prev + 1)            
        const radio = document.getElementById('radio' + count)                 
        if(radio) radio.checked = true
        changeBackground()
        handleSlideEffect()
        handleOverlayEffect()
        handleContentEffefct()
    }    
    useEffect(()=>{
        const backGround = document.querySelector('.back-ground')                    
        backGround.style.backgroundImage = 'url(https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/grookey.jpg)';                                            
    }, [])
    return (
        <>        
            <div className='overlay'>
                <div className='back-ground'>
                    <div className='overlay-part'><div className='animate-overlay'></div></div>
                    <div className='overlay-part'><div className='animate-overlay'></div></div>
                    <div className='overlay-part'><div className='animate-overlay'></div></div>
                    <div className='overlay-part'><div className='animate-overlay'></div></div>
                    <div className='overlay-part'><div className='animate-overlay'></div></div>
                </div>
            </div>
            <Content radio={{
                    "count": count,
                    "next": nextSlide
                }
            }/>       
            <div className="navigation-manual">
                <label className="manual-btn active">01</label>
                <label className="manual-btn">02</label>
                <label className="manual-btn">03</label>
            </div>     
            <div className="slider">
                <div className="slide-effect"></div>
                <div className="slides">
                    <input type={"radio"} name={"radio-btn"} id={"radio1"}/>
                    <input type={"radio"} name={"radio-btn"} id={"radio2"}/>
                    <input type={"radio"} name={"radio-btn"} id={"radio3"}/>

                    <div className="slide first">
                        <img id='slide1' src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/grookey.jpg"/>
                    </div>
                    <div className="slide">
                        <img id='slide2' src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/scorbunny.jpg"/>
                    </div>
                    <div className="slide">
                        <img id='slide3' src="https://assets.pokemon.com//assets/cms2/img/misc/virtual-backgrounds/pokemon/sobble.jpg"/>
                    </div>
                </div>                
            </div> 
        </>
    )
}
export default Home