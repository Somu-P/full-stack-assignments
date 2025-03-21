import React from 'react'
import './Navbar.css'
import logo from '../../assets/img.png'
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
        <img src={logo} alt="" width='40px' />
        <li className='nav'>
            <ul>Home</ul>
            <ul>Sign in</ul>
            <ul>Login</ul>
        </li>
    </div>
    </div>
  )
}

export default Navbar