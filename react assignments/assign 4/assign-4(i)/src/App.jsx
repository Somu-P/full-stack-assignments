import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    email: "",
    birthday: "",
    subject: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    
    if (!formData.firstName || formData.firstName.length < 4 || formData.firstName.length > 6) {
      newErrors.firstName = "First name must be between 4 and 6 characters";
    }
    if (!formData.lastName || formData.lastName.length < 4 || formData.lastName.length > 6) {
      newErrors.lastName = "Last name must be between 4 and 6 characters";
    }
    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must consist of 10 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className='container mt-5'>
      <div className="card p-4">
        <h2 className='mb-4'>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input type="text" name='firstName' placeholder='First Name' className='form-control' onChange={handleChange} />
              {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
            </div>
            <div className="col">
              <input type="text" name='lastName' placeholder='Last Name' className='form-control' onChange={handleChange} />
              {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input type="text" name='phoneNumber' placeholder='Phone Number' className='form-control' onChange={handleChange} />
              {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
            </div>
            <div className="col">
              <input type="date" name="birthday" className="form-control" onChange={handleChange} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <label>Gender:</label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
              <input type="radio" name="gender" value="Female" className="ms-3" onChange={handleChange} /> Female
            </div>
            <div className="col">
              <input type="email" name="email" placeholder="Email" className="form-control" onChange={handleChange} />
            </div>
          </div>

          <div className='mb-3'>
            <select name="subject" className="form-control" onChange={handleChange}>
              <option value="">Choose option</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
