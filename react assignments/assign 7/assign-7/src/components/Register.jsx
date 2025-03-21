import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const [user,setUser]=useState({
    username:"",
    password:"",
   })
   const [error,setError]=useState("");
   const navigate=useNavigate();



  const handleSubmit=async(e)=>{
   e.preventDefault();
   if(!user.username ||!user.password){
    setError("All fields are required")
    return;
   }
   try {
    const res = await axios.get(`http://localhost:5000/users?username=${user.username}`);
    if (res.data.length > 0) {
      setError("Username already exists!");
      return;
    }
    await axios.post("http://localhost:5000/users", user);
    navigate("/login");
  } catch (err) {
    setError("Error registering user!");
  }
  }

  const handleChange=()=>{
   setUser({...user,[e.target.name]:e.target.value})
  }


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='Username' onChange={handleChange}/>
        <input type="password" name="password" placeholder='password' onChange={handleChange}/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default Register