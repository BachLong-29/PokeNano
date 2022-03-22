import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from 'axios';

const Collection = () => {    
    return (
        <div>            
            <Outlet/>        
        </div>
    )
}

export default Collection