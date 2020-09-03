const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");
const Course = require("./course");
const User = require("./user");

const Professor = sequelize.define("professors", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    valuation: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
},{
    paranoid:true
});

Professor.hasMany(Course);


module.exports = Professor;