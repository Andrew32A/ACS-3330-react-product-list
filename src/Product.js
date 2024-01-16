import React from "react";

function Product(props) {
  return (
    <div className="product">
      <h1>{props.name}</h1>
      <p>{props.price}</p>
      <p>{props.category}</p>
    </div>
  );
}

export default Product;
