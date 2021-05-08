const { Sequelize } = require('sequelize');

export const sequelize = new Sequelize('restaurant-app', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});