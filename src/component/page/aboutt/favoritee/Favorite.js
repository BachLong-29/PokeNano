import styles from './Favorite.module.scss'
function Favorite(){
    function importAll(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images
    }
    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    return (
        <>
            <div className='partOne'>
                <div className={styles.squad}>
                    <h2>My Favorite Pokémon Team</h2>                
                    <div className={styles.team}>
                        <div className={styles.boxTeam}>
                            <img
                                src={images["gengar.png"]}
                            />
                            <span>Gengar</span>
                        </div>
                        <div className={styles.boxTeam}>
                            <img
                                src={images["groudon.png"]}
                            />
                            <span>Groudon</span>
                        </div>
                        <div className={styles.boxTeam}>
                            <img
                                src={images["lucario.png"]}
                            />
                            <span>Lucario</span>
                        </div>
                        <div className={styles.boxTeam}>
                            <img
                                src={images["greninja.png"]}
                            />
                            <span>Greninja</span>
                        </div>
                        <div className={styles.boxTeam}>
                            <img
                                src={images["pikachu.png"]}
                            />
                            <span>Pikachu</span>
                        </div>
                        <div className={styles.boxTeam}>
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