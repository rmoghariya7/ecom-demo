import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { globalContext } from "../Context";
import "../styles/adminPanel.css";
const AdminPanel = () => {
  const { loggedInUser, localUsers, setLocalUsers } = useContext(globalContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "user",
  });

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/");
    }

    if (loggedInUser.role !== "admin") {
      navigate("/dashboard");
    }
  }, [loggedInUser, navigate]);

  const handleUserDelete = (email) => {
    setLocalUsers((prev) => {
      return prev.filter((u) => u.email !== email);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLocalUsers((prev) => [...prev, formData]);
  };

  const handleUpdateUser = (email) => {
    navigate(`/update-user?email=${email}`);
  };

  return (
    <>
      <div className="add-user-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="name"
          />
          <button type="submit">Add user</button>
        </form>
      </div>

      <div className="users-container">
        <h1>Users</h1>
        <div className="users">
          {localUsers.map((u) => (
            <div className="user">
              <p>{u.name}</p>
              <span>{u.email}</span>
              <button onClick={() => handleUserDelete(u.email)}>Delete</button>
              <button onClick={() => handleUpdateUser(u.email)}>
                Update user
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
