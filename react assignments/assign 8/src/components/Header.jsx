import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-light bg-light p-3">
      <div className="container">
        <h4>Auth System</h4>
        <div>
          {user ? (
            <>
              <span className="me-3">Hello, {user.username}!</span>
              <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </>
          ) : (
            <>
              <Link to="/signup" className="btn btn-primary me-2">Sign Up</Link>
              <Link to="/signin" className="btn btn-success">Sign In</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
