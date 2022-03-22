import logo from './logo.svg';
import Nav from './navigation/Nav';
import Homepage from './pages/home/Home'
import AboutPage from './pages/about/About'
import Information from './Information/Information';
import CollectionPage from './pages/collection/Collection'
import PokemonPage from './pages/collection/pokemon/Pokemon';
import Layout from './Layout/Layout';
import Error from './error/Error'
import { Routes, Route} from 'react-router-dom'
import './App.css';

function App() {     
  return (
    <>    
      <div className='main-content'>        
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<AboutPage/>} />
          <Route path="/collection" element={<CollectionPage />}>
            <Route index element={<Layout/>} />            
            <Route path=':id' element={<PokemonPage/>}/>
          </Route>
          <Route path='/information' element={<Information/>}/>
          <Route path='/:somestring' element={<Error/>}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;