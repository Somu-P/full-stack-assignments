import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  const [userData, setUserData] = useState({ username: '', dob: '', city: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!userData.username || userData.username.length < 4 || userData.username.length > 8) {
      setError('Username must be between 4 and 8 characters');
      return false;
    }
    if (!userData.dob || !userData.city) {
      setError('All fields are mandatory');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddUser(userData);
      setUserData({ username: '', dob: '', city: '' });
    }
  };

  return (
    <div className='card p-4 mb-3'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='Username' className='form-control mb-2' value={userData.username} onChange={handleChange} />
        <input type='date' name='dob' className='form-control mb-2' value={userData.dob} onChange={handleChange} />
        <input type='text' name='city' placeholder='City' className='form-control mb-2' value={userData.city} onChange={handleChange} />
        {error && <small className='text-danger'>{error}</small>}
        <button type='submit' className='btn btn-primary mt-2'>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
