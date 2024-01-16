import React, { useState } from "react";
import "./App.css";
// challenge 7
import data, {
  allCategories,
  categoriesSet,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories,
} from "./data.js";

// challenge 10 (second 10?)
import CategoryButton from "./CategoryButton";
import Product from "./Product";

function App() {
  // challenge 10
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = data.filter((item) => {
    return item.category === selectedCategory || selectedCategory === "All";
  });

  return (
    <div>
      <h1>Product Data</h1>
      <h2>Categories as Buttons:</h2>
      <div className="category-buttons">
        <button key="All" onClick={() => handleCategoryClick("All")}>
          All
        </button>
        {/* challenge 8 and 9 */}
        {namesAndCategories.map(({ name, count }) => (
          <CategoryButton
            key={name}
            label={`${name} (${count})`}
            onClick={() => handleCategoryClick(name)}
          />
        ))}
      </div>
      <h2>Products:</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
