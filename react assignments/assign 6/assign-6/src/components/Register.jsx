import React, { useState } from 'react'

const Register = () => {
    const[formdata,setformdata]=useState({
        username:"",
        password:"",
        email:"",
        dob:"",
    });
const [errors,setErrors]=useState({})
const [formValid,setFormValid]=useState(false)
const validateform=()=>{
    const newerrors={};
    const {username,password,email,dob}=formdata;
    if(!username) newerrors.username="username is required"
    if(!password) newerrors.password="password is required"
    if(!email) newerrors.email="email is required"
    if(!dob) newerrors.dob="dob is required";
    setErrors(newerrors);
    return Object.keys(newerrors).length === 0;
}
const handleSubmit=(e)=>{
e.preventDefault();
if(validateform()){
    console.log(formdata)
}
}
const handleChange=(e)=>{
    const {name,value}=e.target;
    setformdata((prev)=>({...prev,[name]:value}));

}
  return (
    <div className='container'>
        <h2>Register</h2>
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
                <label>Email</label>
                <input type="email" placeholder='Enter email' name='email' value={formdata.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Date of Birth</label>
                <input type="date" placeholder='Enter DOB' name='dob' value={formdata.dob} onChange={handleChange}/>
                {errors.dob && <p>{errors.dob}</p>}
            </div>
           <div>
           <button type="submit" disabled={!formdata.username || !formdata.password || !formdata.email || !formdata.dob}>
            Submit
          </button>
           </div>
        </form>
    </div>
  )
}

export default Register