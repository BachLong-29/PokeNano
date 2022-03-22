import { useState } from 'react'
import styles from './Favorite.module.css'


function Favorite(){
    const [items, setItems] = useState([])
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className="part-1">
                <div className="squad">
                    <h2>My Favorite Pokémon Team</h2>                
                    <div className="team">
                        <div className="box-team">
                            <img
                                src={images["gengar.png"]}
                            />
                            <span>Gengar</span>
                        </div>
                        <div className="box-team">
                            <img
                                src={images["groudon.png"]}
                            />
                            <span>Groudon</span>
                        </div>
                        <div className="box-team">
                            <img
                                src={images["lucario.png"]}
                            />
                            <span>Lucario</span>
                        </div>
                        <div className="box-team">
                            <img
                                src={images["greninja.png"]}
                            />
                            <span>Greninja</span>
                        </div>
                        <div className="box-team">
                            <img
                                src={images["pikachu.png"]}
                            />
                            <span>Pikachu</span>
                        </div>
                        <div className="box-team">
                            <img
                                src={images["dragonite.png"]}
                            />
                            <span>Dragonite</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Favorite