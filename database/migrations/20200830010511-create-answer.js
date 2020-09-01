'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('answers', {
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
            question_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'questions', key: 'id' }
            },
            content: {
                type: Sequelize.STRING,
                allowNull: false,
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
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('answers');
    }
};