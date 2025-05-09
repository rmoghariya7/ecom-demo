import React, { useContext, useState } from "react";
import "../styles/login.css";
import users from "../users.json";
import { useNavigate } from "react-router";
import { globalContext } from "../Context";

const Login = () => {
  const { setLoggedInUser } = useContext(globalContext);
  const navigate = useNavigate();
  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidCredentials = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    }

    const user = users.users.find((user) => user.email === email);

    if (!user) {
      alert("User not found");
      return false;
    }

    if (user.password !== password) {
      alert("Incorrect password");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidCredentials) {
      const user = users.users.find((user) => user.email === email);
      setLoggedInUser(user);
      setTimeout(() => {
        navigate("/");
        localStorage.setItem("user", JSON.stringify(user));
      }, 200);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
