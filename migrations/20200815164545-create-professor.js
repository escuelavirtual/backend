"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("professors", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            id_user: {
                type: Sequelize.INTEGER,
                allowNull: false,       
                references: { model: "users", key: "id" }
            },
            valuation: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    
    },
  
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("professors");
    }
};
