/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    map[category] = Number(map[category] ?? 0) + Number(price);
  });
  const res = [];
  for (const category in map) {
    res.push({ category: category, totalSpent: map[category] });
  }
  console.log(res);
  return res;
}

module.exports = calculateTotalSpentByCategory;
