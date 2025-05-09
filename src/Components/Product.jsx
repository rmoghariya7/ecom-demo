import React from "react";

const Product = ({ product, addToCart }) => {
  const { name, price, img } = product;
  return (
    <div className="product">
      <div className="productImage">
        <img src={img} alt={price} />
      </div>
      <div className="product-desc">
        <h1>{name}</h1>
        <h3>{price}</h3>
      </div>
      <div className="add-to-cart">
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
