import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  if (!user) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center">Welcome, {user.username}!</h3>
        <p className="text-center">You are successfully logged in.</p>
      </div>
    </div>
  );
};

export default Profile;
