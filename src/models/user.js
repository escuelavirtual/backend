const Sequelize = require('sequelize');
const { sequelize } = require('../../config/db/mysql');
const Professor = require("./professor");

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    profile_image:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
},{
    paranoid:true
});

User.hasOne(Professor);

module.exports = User;
