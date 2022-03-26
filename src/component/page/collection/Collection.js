import { Outlet } from 'react-router-dom'
import './Collection.module.scss'

const Collection = () => {    
    return (
        <div>            
            <Outlet/>        
        </div>
    )
}

export default Collection