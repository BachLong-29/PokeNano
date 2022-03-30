import React from 'react'
import Homepage from '../pages/home/Home'
import AboutPage from '../pages/about/About'
import CollectionPage from '../pages/collection/Collection'
import PokemonPage from '../pages/collection/pokemon/Pokemon';
import Background from '../pages/background/Background';
import Intention from '../pages/intention/Intention';
import Layout from '../pages/collection/layout/Layout';
import Error from '../component/error/Error';

import { Routes, Route} from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutPage/>} />
        <Route path="/collection" element={<CollectionPage />}>
          <Route index element={<Layout/>} />            
          <Route path=':id' element={<PokemonPage/>}/>
        </Route>
        <Route path='/intention' element={<Intention/>} />
        <Route path='/background' element={<Background/>} />
        <Route path='/:somestring' element={<Error/>}/>
    </Routes>
  )
}

export default Routers