'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('exams', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            moduleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('exams');
    }
};