const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");

const Exam = sequelize.define('exams', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    moduleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'modules', key: 'id' }
    },
    type: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    publishedAt: {
        allowNull: true,
        type: Sequelize.DATE
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
}, {
    paranoid: true
});

module.exports = Exam;