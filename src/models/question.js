const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");

const Question = sequelize.define('questions', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    examId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'exams', key: 'id' }
    },
    typeQuestionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'type_questions', key: 'id' }
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    minimum: {
        type: Sequelize.INTEGER
    },
    tope: {
        type: Sequelize.INTEGER
    },
    length: {
        type: Sequelize.INTEGER
    },
    help: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
}, {
    paranoid: true
});

module.exports = Question;