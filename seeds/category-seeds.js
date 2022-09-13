const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Accessories',
  },
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Jeans',
  },
  {
    category_name: 'Basketball Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
