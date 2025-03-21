import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userContextObj } from "./UserContext";

function NewUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState();
  const { setCurrentUser } = useContext(userContextObj);
  const navigate = useNavigate();

  function handleFormSubmit(newUser) {
    fetch("http://localhost:3000/Users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => (res.status === 201 ? res.json() : null))
      .then((newUser) => {
        if (newUser) {
          setCurrentUser(newUser);
          navigate("/users");
        }
      })
      .catch((err) => setError(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 bg-white w-50">
        <h3 className="text-center text-secondary mb-4">Create a New User</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-control"
              {...register("username", {
                required: "Username is required",
                minLength: { value: 4, message: "At least 4 characters" },
                maxLength: { value: 10, message: "At most 10 characters" },
              })}
              id="username"
              type="text"
            />
            {errors.username && (
              <small className="text-danger">{errors.username.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              {...register("email", { required: "Email is required" })}
              id="email"
              type="email"
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="form-control"
              {...register("dob", { required: "Date of birth is required" })}
              id="dob"
              type="date"
            />
            {errors.dob && (
              <small className="text-danger">{errors.dob.message}</small>
            )}
          </div>

          <button className="btn btn-primary w-100 mt-3" type="submit">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewUser;
