require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'ecommerce',
  'root',
  'Shawn2665@',
   {
     host: '127.0.0.1',
     dialect: 'mysql'
   }
 );

module.exports = sequelize;
