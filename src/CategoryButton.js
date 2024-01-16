import React from "react";

function CategoryButton(props) {
  return (
    <button onClick={props.onClick} className="category-button">
      {props.label}
    </button>
  );
}

export default CategoryButton;
