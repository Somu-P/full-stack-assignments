import React from 'react'
import { useState,useEffect } from 'react'
const App = () => {
  const [users,setusers]=useState([]);
  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>response.json())
    .then((data)=>setusers(data.data))
    .catch((err)=>console.log("Error in fetching:",err))
  },[])
  return (
    <div>
      <h2>User list</h2>
     {
      users.map((user)=>(
        <div key={user.id}>
        <img src={user.avatar} alt="no image" />
        <p>{user.first_name} {user.last_name}</p>
        <p>Email:{user.email}</p>
        </div>
      ))
     }
    </div>
  )
}

export default App