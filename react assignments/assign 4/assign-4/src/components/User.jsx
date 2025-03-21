import React, { useEffect, useState } from "react";

const User = ({onAddUser}) => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setusers(data))
      .catch((err) => console.log("Error in fetching", err));
  },[]); 
  return (
    <div className="row">
      {users.map((user) => (
        <div key={user.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
            <p className="card-text">{user.phone}</p>
            <button className="btn btn-success" onClick={onAddUser}>Add user</button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default User;
