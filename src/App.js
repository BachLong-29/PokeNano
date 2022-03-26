import Nav from './component/navigation/Nav';
import Homepage from './component/page/home/Home'
import AboutPage from './component/page/aboutt/About'
import CollectionPage from './component/page/collection/Collection'
import PokemonPage from './component/page/collection/pokemon/Pokemon';
import Background from './component/page/background/Background';
import Intention from './component/page/intention/Intention';
import Layout from './component/page/collection/layout/Layout';
import Error from './component/error/Error'
import './App.module.scss'
import { Routes, Route} from 'react-router-dom'
import './App.css';

function App() {     
  return (
    <>    
        <Nav />
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
    </>
    
  );
}

export default App;