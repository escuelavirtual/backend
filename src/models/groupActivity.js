const Sequelize = require('sequelize');
const { sequelize } = require('../../config/db/mysql');

const GroupActivity = sequelize.define('group_activities', {

    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    activity_name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    instructions: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    comments: {
        type: Sequelize.STRING(200),
        allowNull: false
    }

}, {
    timestamps: true
});



module.exports = GroupActivity;