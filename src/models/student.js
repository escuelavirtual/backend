const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");

const Student = sequelize.define("students", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' }
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
},{
    paranoid:true
});

module.exports = Student;
