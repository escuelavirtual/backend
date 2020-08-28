const Sequelize = require('sequelize');
const { sequelize } = require('../../config/db/mysql');

const Module = sequelize.define('modules', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    description: {
        type: Sequelize.STRING(400),
        allowNull: false
    }
},{
    timestamps:true
});



module.exports = Module;
