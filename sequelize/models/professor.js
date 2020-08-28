const Sequelize = require("sequelize");
const {sequelize} = require("../../config/db/mysql");

const Professor = sequelize.define("professors", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    valuation: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
},{
    paranoid:true
});



module.exports = Professor;