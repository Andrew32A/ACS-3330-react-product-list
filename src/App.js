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

  // challenge 13
  const allPrices = data.reduce((total, product) => {
    const price = parseFloat(product.price.slice(1));
    return total + price;
  }, 0);

  const selectedPrices = filteredProducts.reduce((total, product) => {
    if (product.category === selectedCategory || selectedCategory === "All") {
      const price = parseFloat(product.price.slice(1));
      return total + price;
    }
    return total;
  }, 0);

  const categoryCounts = data.reduce((countMap, product) => {
    countMap[product.category] = (countMap[product.category] || 0) + 1;
    return countMap;
  }, {});

  return (
    <div>
      <h1>Product Data</h1>
      <h2>Categories as Buttons:</h2>
      <div className="category-buttons">
        {/* challenge 12 */}
        <button
          key="All"
          onClick={() => handleCategoryClick("All")}
          className={
            selectedCategory === "All"
              ? "category-button active"
              : "category-button"
          }
        >
          All
        </button>
        {/* challenge 8 and 9 */}
        {namesAndCategories.map(({ name, count }) => (
          <CategoryButton
            key={name}
            label={`${name} (${count})`}
            onClick={() => handleCategoryClick(name)}
            active={selectedCategory === name}
            count={categoryCounts[name]}
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
            units={product.units}
            rating={product.rating}
          />
        ))}
      </ul>

      {/* challenge 13 */}
      <h2>Price Information:</h2>
      <p>Total Price of All Products: ${allPrices.toFixed(2)}</p>
      <p>Total Price of Selected Products: ${selectedPrices.toFixed(2)}</p>
    </div>
  );
}

export default App;
