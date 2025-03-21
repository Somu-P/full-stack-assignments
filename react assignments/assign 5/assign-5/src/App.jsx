import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Count";
import UserCount from "./components/Users";
import './App.css'

const App = () => {
  const [userCount, setUserCount] = useState(0);

  const handleAddUser = () => {
    setUserCount(userCount + 1);
  };

  return (
    <div className="text-center mt-5">
      <h2>React User Counter</h2>
      <UserCount count={userCount} />
      <Users onAddUser={handleAddUser} />
    </div>
  );
};

export default App;