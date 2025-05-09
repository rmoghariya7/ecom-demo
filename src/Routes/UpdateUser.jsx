import React, { useContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { globalContext } from "../Context";

const UpdateUser = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate();

  const { localUsers, setLocalUsers } = useContext(globalContext);
  const [userToUpdate, setUserToUpdate] = useState(
    localUsers.find((u) => u.email === email)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserToUpdate((prev) => ({ ...prev, [name]: value }));
  };
  const handeUpdate = () => {
    setLocalUsers((prev) => {
      return prev.map((u) => {
        if (u.email === email) {
          return { ...u, ...userToUpdate };
        } else return u;
      });
    });
    navigate("/admin-panel");
  };
  return (
    <div>
      <h1>Update user</h1>

      <input
        type="text"
        onChange={handleChange}
        value={userToUpdate.name}
        name="name"
      />
      <input
        type="text"
        onChange={handleChange}
        value={userToUpdate.email}
        name="email"
      />

      <button onClick={handeUpdate}>Update</button>
    </div>
  );
};

export default UpdateUser;
