import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home } from './components/hOME.JSX'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
