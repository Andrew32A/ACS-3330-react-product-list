import React from "react";

function Product(props) {
  const units = props.units;
  const rating = Math.round(props.rating);

  return (
    <div className={`product ${units === 0 ? "disabled" : ""}`}>
      <h1>{props.name}</h1>
      <p>Category: {props.category}</p>
      <p>Price: ${parseFloat(props.price.slice(1)).toFixed(2)}</p>
      <p>Units: {units}</p>
      <p>
        Rating:{" "}
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>★</span>
        ))}
      </p>
    </div>
  );
}

export default Product;
