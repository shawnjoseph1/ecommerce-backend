const { Product } = require('../models');

const productData = [
  {
    product_name: 'Watch',
    price: 50.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Nike Sneakers',
    price: 110.00,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'Blue Jeans',
    price: 25.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Baseball Hat',
    price: 8.99,
    stock: 30,
    category_id: 3,
  },
  {
    product_name: 'T-Shirt',
    price: 10.99,
    stock: 30,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
