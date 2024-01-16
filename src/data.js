// challenge 1
import data from "./data.json";

// challenge 2
const allCategories = data.map((obj) => obj.category);

// challenge 3
const categoriesSet = new Set(allCategories);
const categoriesUnique = Array.from(categoriesSet);

// challenge 4
const categoriesWithCounts = data.reduce((obj, product) => {
  if (obj.hasOwnProperty(product.category)) {
    obj[product.category]++;
  } else {
    obj[product.category] = 1;
  }
  return obj;
}, {});

// challenge 5
const namesAndCategories = categoriesUnique.map((name) => ({
  name,
  count: categoriesWithCounts[name],
}));

// challenge 6
export {
  data,
  allCategories,
  categoriesSet,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories,
};
export default data;
