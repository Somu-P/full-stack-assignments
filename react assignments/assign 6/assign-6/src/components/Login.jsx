import React, { useState } from 'react'

const Login = () => {
const [formdata,setformdata]=useState({
username:"",
password:"",
})
const [errors,setErrors]=useState({})
const [formValid,setFormValid]=useState(false)
const handleChange=(e)=>{
    const {name,value}=e.target
    setformdata(prev=>({...prev,[name]:value}))
}
const validateform = () => {
    const newErrors = {};
    const { username, password } = formdata;

    if (!username) newErrors.username = "Username is required.";
    if (!password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const handleSubmit=(e)=>{
e.preventDefault();
if(validateform()){
    console.log(formdata)
}
}

  return (
    <div className='container'>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
        <div>
                <label>Username</label>
                <input type="text" placeholder='Enter name' name='username' value={formdata.username} onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder='Enter password' name='password' value={formdata.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
                </div>
                <div>
                <button type="submit" disabled={!formdata.username || !formdata.password}>
            Submit
          </button>
                </div>
        </form>
    </div>
  )
}

export default Login