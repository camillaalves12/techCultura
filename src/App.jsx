import  './App.scss'
import  'bootstrap/dist/css/bootstrap.min.css' ;

import { Initial } from './pages/Initial/Initial';
import { Arts } from './pages/Arts/Arts';
import { ArtItem } from './pages/ArtItem/ArtItem';


import {
  BrowserRouter as Router,
  Route,
  Routes

} from 'react-router-dom'


function App() {

  return (
    <Router>
      
        <Routes>
          <Route exact path='/' element={<Initial />}/>
          <Route exact path='/arts' element={<Arts/>}/>
          <Route exact path='/artItem/:id' element={<ArtItem/>}/>
        </Routes>
    </Router>


  )
}

export default App
