import React, { useState, useEffect } from "react";

const Users = ({ onAddUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0, 4))) // Get only 4 users
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-md-3">
            <div className="card p-3 mb-3">
              <h5>{user.name}</h5>
              <button className="btn btn-primary" onClick={onAddUser}>Add User</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;