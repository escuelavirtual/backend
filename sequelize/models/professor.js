const Sequelize = require('sequelize');
const {sequelize} = require('../../config/db/mysql');
const User = require('./user');

const Professor = sequelize.define('professor', {
    id_professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,

    },
    valuation: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})



module.exports = Professor;