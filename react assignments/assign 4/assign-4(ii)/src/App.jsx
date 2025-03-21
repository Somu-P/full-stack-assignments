// App.js
import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div className='container mt-5'>
      <h2>User Registration</h2>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;