import React, { useState } from "react";
import { useContext } from "react";
import { userContextObj } from "./UserContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Users() {
  const { currentUser, setCurrentUser, addRemovedUser } =
    useContext(userContextObj);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [editStatus, setEditStatus] = useState(null);
  const [us, setUs] = useState(null);
  const navigate = useNavigate();

  function onEdit(user) {
    setEditStatus(true);
    setUs(user);
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("dob", user.dob);
  }

  function onModifiedUserSave(modifiedUser) {
    fetch(`http://localhost:3000/Users/${us.id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(modifiedUser),
    })
      .then((res) => res.json())
      .then((editedUser) => {
        setCurrentUser(editedUser);
      })
      .catch((err) => console.log(err));

    setEditStatus(null);
  }

  function delUser(userId) {
    const deletedUser = currentUser.find((user) => user.id === userId);
    fetch(`http://localhost:3000/Users/${userId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          setCurrentUser((prevUsers) =>
            prevUsers.filter((user) => user.id !== userId)
          );
          addRemovedUser(deletedUser);
          navigate("/removed-users");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mt-5">
      <table className="table table-bordered table-striped table-hover shadow w-75 mx-auto text-center">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUser.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.dob}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm fw-bold"
                  onClick={() => delUser(user.id)}
                >
                  Remove
                </button>
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#edit"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editStatus && (
        <div
          className="modal fade show d-block"
          data-bs-backdrop="static"
          id="edit"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-light p-3 shadow">
              <div className="modal-header">
                <h5 className="modal-title text-center w-100">Edit User</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={() => setEditStatus(null)}
                ></button>
              </div>
              <div className="modal-body">
                <form
                  className="w-100"
                  onSubmit={handleSubmit(onModifiedUserSave)}
                >
                  <div className="mb-3">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="form-control"
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 4,
                          message:
                            "*Username should contain at least 4 characters",
                        },
                        maxLength: {
                          value: 10,
                          message:
                            "*Username should contain at most 10 characters",
                        },
                      })}
                      type="text"
                    />
                    {errors.username && (
                      <p className="text-danger">{errors.username.message}</p>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      {...register("email", { required: "Email is required" })}
                      type="email"
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="dob">
                      Date of Birth
                    </label>
                    <input
                      className="form-control"
                      {...register("dob", {
                        required: "Date of Birth is required",
                      })}
                      type="date"
                    />
                    {errors.dob && (
                      <p className="text-danger">{errors.dob.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
