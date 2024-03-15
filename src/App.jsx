import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './styles/App.css'
import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className='app'>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App