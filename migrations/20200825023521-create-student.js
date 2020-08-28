"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("students", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            //se requiere comentar group_activiy
            id_group_activity:{
                type:Sequelize.INTEGER,
                references:{model:"group_activities",key:"id"},
                allowNull:false
            },
            id_user:{
                type:Sequelize.INTEGER,
                allowNull:false,
                references:{model:"users",key:"id"}
            },
            code: {
                type: Sequelize.STRING(16),
                allowNull:false
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
        await queryInterface.dropTable("students");
    }
};