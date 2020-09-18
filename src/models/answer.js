const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");

const Answer = sequelize.define('answers', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'questions', key: 'id' }
    },
    content: {
        type: Sequelize.STRING
    },
    isTrue: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
}, {
    paranoid: true
});

module.exports = Answer;