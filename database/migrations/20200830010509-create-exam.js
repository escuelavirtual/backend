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
                references: { model: 'modules', key: 'id' }
            },
            type: {
                type: Sequelize.STRING
            },
            name_exam: {
                type: Sequelize.STRING,
                allowNull: false,
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