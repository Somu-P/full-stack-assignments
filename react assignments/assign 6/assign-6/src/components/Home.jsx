import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h3>Welcome to Home page</h3>
        <ul>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/technologies'>Technologies</Link></li>
        </ul>
    </div>
  )
}

export default Home