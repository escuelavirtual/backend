const Sequelize = require('sequelize');
const {sequelize} = require('../../config/db/mysql');
const User = require('./user');

const Professor = sequelize.define('professor', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    valuation: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    paranoid:true
});



module.exports = Professor;