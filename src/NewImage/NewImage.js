import axios from 'axios'
import React, { useEffect, useState } from 'react'
import blastoise from '../Layout/img/blastoise.png'

const NewImage = (props) => {
    const [ava, setAva] = useState('')
    const [info, setInfo] = useState({})
    const [files, setFiles] = useState([])
    const getInfoPokemon = async() => {
        const res = await axios.get(`http://localhost:3001/pokemon/${props.id}`)        
        setInfo(res.data)        
    }
    const handleDisplayPreview = () => {
        document.querySelector('.preview').style.display = 'block'
    }         
    const handleSubmitNanoblocks = () => {
        console.log(files);
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
    }
    const handleFiles = (e) => {
        const fileChosen = e.target.files
        console.log('filechosen: ')
        console.log(fileChosen.length)
        for(let i=0; i < fileChosen.length; i++){
            const reader = new FileReader()
            reader.readAsDataURL(fileChosen[i])
            reader.addEventListener('load', () => {
                console.log(reader.result);
                setFiles(prev => [...prev, reader.result])
            })
        }        
    }
    useEffect(()=>{                
        getInfoPokemon()
    }, [])
    return (
        <div>            
            <label htmlFor='ava'>Avatar</label>
            <input
                onChange={e => setAva(e.target.value)}                
                type="text"
                id='ava'
            />
            <button
                onClick={handleDisplayPreview}
            >Preview</button>
            <button
                onClick={handleSubmitPreview}
            >Submit</button>
            {
                ava && <img
                    style={{
                        display: 'none'
                    }}
                    className="preview"
                    src={ava}
                    width="200px"
                />
            }
            <label htmlFor=''>Nanoblocks</label>
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
    )
}

export default NewImage