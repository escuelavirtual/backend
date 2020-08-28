"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("courses", {
            id : {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            id_professor: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "professors", key: "id" }
            },
            title: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull : false,
            },
            requirements: {
                type: Sequelize.STRING
            },
            isPrivate: {  
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            code: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            rating:{
                type:Sequelize.DOUBLE,
                allowNull:true
            },
            category:{
                type:Sequelize.INTEGER,
                allowNull:false,
                references: { model: "categories", key: "id" }
            },
            status:{
                type:Sequelize.STRING,
                allowNull:true
            },
            startedAt: {
                type: Sequelize.DATE
            },
            finishedAt: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable("courses");
    }
};
