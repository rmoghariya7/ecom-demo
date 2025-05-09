import React, { useContext, useEffect } from "react";
import { globalContext } from "../Context";
import Product from "../Components/Product";
import "../styles/cart.css";
import { useNavigate } from "react-router";

const CartPage = () => {
  const { cartProducts, setCartProducts, loggedInUser } =
    useContext(globalContext);
  const navigate = useNavigate();

  const handleDeleteProduct = (name) => {
    setCartProducts((prev) => {
      return prev.map((p) => {
        if (p.name === name) {
          return { ...p, quantity: p.quantity - 1 };
        } else return p;
      });
    });
  };

  const handleAddProduct = (name) => {
    setCartProducts((prev) => {
      return prev.map((p) => {
        if (p.name === name) {
          return { ...p, quantity: p.quantity + 1 };
        } else return p;
      });
    });
  };

  const deleteProduct = (name) => {
    setCartProducts((prev) => {
      return prev.filter((p) => p.name !== name);
    });
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  });

  if (!cartProducts.length) {
    return <h1>Your cart is empty</h1>;
  }

  return cartProducts.map((product) => (
    <div className="cart">
      <img src={product.img} alt={product.name} />
      <span>{product.name}</span>
      <div className="cta">
        <button
          disabled={product.quantity < 2}
          onClick={() => handleDeleteProduct(product.name)}
        >
          {" "}
          -
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => handleAddProduct(product.name)}>+</button>
        <button onClick={() => deleteProduct(product.name)}>
          Delete product
        </button>
      </div>
    </div>
  ));
};

export default CartPage;
