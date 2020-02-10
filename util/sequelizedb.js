const Sequelize = require('sequelize');

const sequelize = new Sequelize('newtons-method', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
