const Sequelize = require('sequelize');
const sequelize = require('../util/sequelizedb');

const Calculation = sequelize.define('calculation', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    function: {
        type: Sequelize.STRING,
        allowNull: false
    },
    root: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = Calculation;
