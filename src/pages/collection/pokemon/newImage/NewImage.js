import React, { useEffect, useState } from 'react'
import styles from './NewImage.module.scss'
import axios from 'axios'

const NewImage = (props) => {
    const [ava, setAva] = useState('')
    const [info, setInfo] = useState({})
    const [files, setFiles] = useState([])
    const api = 'http://localhost:3001/pokemon/'
    const getInfoPokemon = async() => {
        const res = await axios.get(`${api}${props.id}`)        
        setInfo(res.data)        
    }
    const handleDisplayPreview = () => {
        document.querySelector('.preview').style.display = 'block'
    }         
    const handleSubmitNanoblocks = () => {
        axios({
            method: 'put',
            url: `http://localhost:3001/pokemon/${props.id}`,
            data: {
                ...info,
                "nanoblocks": [                   
                    ...info.nanoblocks,
                    ...files
                ]
            }
        })
        alert('Success')
    }
    const handleSubmitPreview = () => {
        axios({
            method: 'put',
            url: `http://localhost:3001/pokemon/${props.id}`,
            data: {
                ...info,
                "image": ava
            }
        });
        alert('Success')
    }
    const handleFiles = (e) => {
        const fileChosen = e.target.files
        document.getElementById('lblNanoblock').innerHTML = `${fileChosen.length} files`
        for(let i=0; i < fileChosen.length; i++){
            const reader = new FileReader()
            reader.readAsDataURL(fileChosen[i])
            reader.addEventListener('load', () => {
                setFiles(prev => [...prev, reader.result])
            })
        }        
    }
    useEffect(()=>{                
        getInfoPokemon()
    }, [])
    return (
        <div className={styles.imageInput}>                        
            <div>
                <input
                    onChange={e => setAva(e.target.value)}  
                    placeholder="ex: https://i.imgur.com/1QM9OGq.png"              
                    type="text"
                    id='ava'
                />
                <button
                    onClick={handleDisplayPreview}
                    style={{
                        'marginLeft': '5px'
                    }}
                >Preview</button>
                <button
                    onClick={handleSubmitPreview}
                    style={{
                        'marginLeft': '5px'
                    }}
                >Submit</button>
                {
                    ava && <img
                        style={{
                            display: 'none',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                        className="preview"
                        src={ava}
                        width="200px"
                    />
                }
            </div>
            <div>
                <label id='lblNanoblock' htmlFor='nanoblock'>Nanoblocks</label>
                <input
                    type="file"
                    id='nanoblock'
                    onChange={handleFiles}
                    multiple            
                />   
                <button
                    onClick={handleSubmitNanoblocks}
                >Submit</button> 
            </div>        
        </div>
    )
}

export default NewImage