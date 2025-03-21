import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const closeSidebar = () => {
    const sidebar = document.getElementById("mobileSidebar");
    if (sidebar) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(sidebar);
      offcanvasInstance?.hide();
    }
  };

  return (
    <div className="header-container bg-warning shadow-sm p-3 container-fluid d-flex align-items-center justify-content-between rounded">
      <img
        src="https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=826"
        width="50"
        height="50"
        alt="Logo"
        className="ms-2 rounded-circle"
      />

      {/* Desktop Navigation */}
      <ul className="nav d-none d-md-flex align-items-center">
        <li className="nav-item mx-3">
          <Link className="nav-link nav-link-custom" to="new-user">
            New User
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link nav-link-custom" to="users">
            Users
          </Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link nav-link-custom" to="removed-users">
            Removed Users
          </Link>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button
        className="btn btn-dark d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        ☰
      </button>

      {/* Offcanvas Sidebar for Mobile */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
        aria-labelledby="mobileSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 id="mobileSidebarLabel">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link
                className="nav-link nav-link-custom"
                to="new-user"
                onClick={closeSidebar}
              >
                New User
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-link-custom"
                to="users"
                onClick={closeSidebar}
              >
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-link-custom"
                to="removed-users"
                onClick={closeSidebar}
              >
                Removed Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
