import React, { useState } from "react";
import "./App.css";
// challenge 7
import data, { namesAndCategories } from "./data.js";

// challenge 10 (second 10?)
import CategoryButton from "./CategoryButton";
import Product from "./Product";

function App() {
  // challenge 10
  const [selectedCategories, setSelectedCategories] = useState(["All"]);

  const handleCategoryClick = (category) => {
    // challenge 11 and 14
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories((prevSelectedCategories) => {
        if (prevSelectedCategories.includes("All")) {
          return prevSelectedCategories
            .filter((c) => c !== "All")
            .concat(category);
        } else {
          if (prevSelectedCategories.includes(category)) {
            return prevSelectedCategories.filter((c) => c !== category);
          } else {
            return [...prevSelectedCategories, category];
          }
        }
      });
    }
  };

  const filteredProducts = data.filter((item) => {
    return (
      selectedCategories.includes("All") ||
      selectedCategories.includes(item.category)
    );
  });

  // challenge 13
  const allPrices = data.reduce((total, product) => {
    const price = parseFloat(product.price.slice(1));
    return total + price;
  }, 0);

  const selectedPrices = filteredProducts.reduce((total, product) => {
    if (
      selectedCategories.includes("All") ||
      selectedCategories.includes(product.category)
    ) {
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
            selectedCategories.includes("All")
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
            active={selectedCategories.includes(name)}
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
      <h2 className="price-info-header">Price Information:</h2>
      <p className="total-price">
        Total Price of All Products: ${allPrices.toFixed(2)}
      </p>
      <p className="total-price">
        Total Price of Selected Products: ${selectedPrices.toFixed(2)}
      </p>
    </div>
  );
}

export default App;
