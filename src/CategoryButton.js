import React from "react";

function CategoryButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.active ? "category-button active" : "category-button"}
    >
      {props.label}
    </button>
  );
}

export default CategoryButton;
