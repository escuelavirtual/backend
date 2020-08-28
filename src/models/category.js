const Sequelize = require('sequelize');
const { sequelize } = require('../../config/db/mysql');

const Category = sequelize.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(60),
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING(60),
        allowNull: false,
    }
});


module.exports = Category;

