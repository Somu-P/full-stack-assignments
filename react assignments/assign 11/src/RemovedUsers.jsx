import React, { useContext } from "react";
import { userContextObj } from "./UserContext";

function RemovedUsers() {
  const { removedUser, restoreUser } = useContext(userContextObj);

  return (
    <div className="container mt-4">
      <h3 className="text-center fw-bold text-danger">Removed Users</h3>

      <div className="table-responsive mt-4">
        <table className="table table-hover table-bordered text-center shadow-lg">
          <thead className="table-dark">
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Restore</th>
            </tr>
          </thead>
          <tbody>
            {removedUser.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-muted fw-semibold">
                  No removed users.
                </td>
              </tr>
            ) : (
              removedUser.map((user, index) => (
                <tr key={index} className="align-middle">
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>
                    <button
                      className="btn btn-success btn-sm px-3"
                      onClick={() => restoreUser(user.id)}
                    >
                      Restore
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RemovedUsers;
