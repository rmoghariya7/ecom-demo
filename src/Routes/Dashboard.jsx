import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { globalContext } from "../Context";
import products from "../product.json";
import Product from "../Components/Product";
import "../styles/product.css";
import Cart from "../Components/Cart";

const Dashboard = () => {
  const { loggedInUser } = useContext(globalContext);
  const { setCartProducts } = useContext(globalContext);

  const navigate = useNavigate();

  const addToCart = (product) => {
    setCartProducts((prev) => {
      console.log("firstw", prev);
      console.log("firstp", product);
      const isAlreadyExist = prev.find((p) => p.name === product.name);
      console.log("first", isAlreadyExist);

      if (isAlreadyExist) {
        return prev.map((p) => {
          if (p.name === product.name) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  return (
    <>
      <Cart />

      <div className="product-container">
        {products.products.map((product) => {
          return <Product addToCart={addToCart} product={product} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
