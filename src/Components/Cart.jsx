import React, { useContext } from "react";
import { globalContext } from "../Context";
import { Link, useNavigate } from "react-router";

const Cart = () => {
  const { cartProducts, loggedInUser, setLoggedInUser } =
    useContext(globalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="header">
      <h3>Header</h3>
      {loggedInUser?.role === "admin" && (
        <Link to={"/admin-panel"}>Admin Panel</Link>
      )}

      <span onClick={handleLogout}>Logout</span>

      <div className="cart">
        <span>{cartProducts.length}</span>
        <button onClick={() => navigate("/cart")}>Cart</button>
      </div>
    </div>
  );
};

export default Cart;
