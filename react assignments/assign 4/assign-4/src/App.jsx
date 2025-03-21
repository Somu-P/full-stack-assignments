import React, { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import User from './components/User'
import Usercount from './components/Usercount'
const App = () => {
  const [users,setusers]=useState(0)

  function onAddUser(){
    setusers(users+1)
  }
  return (
    <div className='container mt-4'>
     <User onAddUser={onAddUser}/>
    <Usercount count={users}/> 
    </div>
  )
}

export default App