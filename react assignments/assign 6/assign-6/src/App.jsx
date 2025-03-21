import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Technologies from './components/Technologies'
import './App.css'
const App = () => {
  return (
    <Router>
    <div className="container">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/register"> Register</Link> | 
        <Link to="/login"> Login</Link> | 
        <Link to="/technologies"> Technologies</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/technologies' element={<Technologies/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App