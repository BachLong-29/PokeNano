import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import styles from './Content.module.scss'

function Content(props){
    const [content, setContent] = useState(0)    
    const handleClick = () => {        
        props.radio.next()
        setContent(prev => prev + 1)        
    }
    // Control current content
    useEffect(() => {
        if(content > 2) setContent(0)
        else{
            const activeElement = document.querySelector(`.${styles.content}:nth-child(${content + 1})`)
            const prevActiveContent = document.querySelectorAll(`.${styles.content}.${styles.active}`)
            if(prevActiveContent){
                for(let i = 0; i < prevActiveContent.length; i++){
                    prevActiveContent[i].classList.remove(styles.active)
                }
            }
            activeElement.classList.add(styles.active)
        }
    },[content])
    return(
        <div>
        <div className={styles.content}>
            <div className={styles.intro}>
                <h1>Grass Type Starter Grookey</h1>
                <p>Grookey is one of the starter Pokémon available 
                    in Pokémon Sword and Shield (releasing late 2019) 
                    along with Scorbunny and Sobble.</p>
                <div className={styles.readMore}>
                    <button onClick={handleClick}>                                                            
                    <FontAwesomeIcon icon={faArrowDown} />
                    </button>   
                    <span>Read more</span>
                </div>                  
            </div>
            <div className={styles.detailedContent}>
                <div className={styles.col}>
                    <p>It is a mischievous Pokémon that is full of
                        boundless curiosity. During the Sword and
                        Shield announcement trailer it is seen tapping
                        the stick it keeps in its hair, then climbing
                        to the top of a building.</p>
                </div>
                <div className={styles.col}>
                    <p>It is a mischievous Pokémon that is full of
                        boundless curiosity. During the Sword and
                        Shield announcement trailer it is seen tapping
                        the stick it keeps in its hair, then climbing
                        to the top of a building.</p>
                </div>
                <div className={styles.col}>
                    <p>It is a mischievous Pokémon that is full of
                        boundless curiosity. During the Sword and
                        Shield announcement trailer it is seen tapping
                        the stick it keeps in its hair, then climbing
                        to the top of a building.</p>
                </div>
            </div>
        </div>  
        <div className={styles.content}>
            <div className={styles.intro}>
                <h1>Fire Type Starter Scorbunny</h1>
                <p>Scorbunny is a Fire type Pokémon introduced in 
                    Generation 8. It is known as the Rabbit 
                    Pokémon.</p>
                <div className={styles.readMore}>
                    <button onClick={handleClick}>                                                            
                    <FontAwesomeIcon icon={faArrowDown} />
                    </button>   
                    <span>Read more</span>
                </div>                  
            </div>
            <div className={styles.detailedContent}>
                <div className={styles.col}>
                    <p>It is always running about, bursting with 
                        energy. During the Sword and Shield 
                        announcement trailer it runs up a large cog, 
                        then leaves fiery footprints in the grass.</p>
                </div>
                <div className={styles.col}>
                    <p>It is always running about, bursting with 
                        energy. During the Sword and Shield 
                        announcement trailer it runs up a large cog, 
                        then leaves fiery footprints in the grass.</p>
                </div>
                <div className={styles.col}>
                    <p>It is always running about, bursting with 
                        energy. During the Sword and Shield 
                        announcement trailer it runs up a large cog, 
                        then leaves fiery footprints in the grass.</p>
                </div>
            </div>
        </div>  
        <div className={styles.content}>
            <div className={styles.intro}>
                <h1>Water Type Starter Sobble</h1>
                <p>Sobble is one of the starter Pokémon available 
                    in Pokémon Sword and Shield (releasing late 2019) 
                    along with Scorbunny and Grookey.</p>
                <div className={styles.readMore}>
                    <button onClick={handleClick}>                                                            
                    <FontAwesomeIcon icon={faArrowDown} />
                    </button>   
                    <span>Read more</span>
                </div>                  
            </div>
            <div className={styles.detailedContent}>
                <div className={styles.col}>
                    <p>It is a mischievous Pokémon that is full of
                        boundless curiosity. During the Sword and
                        Shield announcement trailer it is seen tapping
                        the stick it keeps in its hair, then climbing
                        to the top of a building.</p>
                </div>
                <div className={styles.col}>
                    <p>It is a mischievous Pokémon that is full of
                        boundless curiosity. During the Sword and
                        Shield announcement trailer it is seen tapping
                        the stick it keeps in its hair, then climbing
                        to the top of a building.</p>
                </div>
                <div className={styles.col}>
                    <p>It is a mischievous Pokémon that is full of
                        boundless curiosity. During the Sword and
                        Shield announcement trailer it is seen tapping
                        the stick it keeps in its hair, then climbing
                        to the top of a building.</p>
                </div>
            </div>
        </div>  
        </div>      
    )
}

export default Content