import React from 'react';

const UserList = ({ users }) => {
  return (
    <div className='card p-4'>
      <h3>List of Users</h3>
      <ul className='list-group'>
        {users.map((user, index) => (
          <li key={index} className='list-group-item'>
            {user.username} - {user.dob} - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
