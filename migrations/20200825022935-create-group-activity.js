'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('group_activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_module:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{model:'modules',key:'id'}
      },
      activity_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      instructions: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      grade: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING(200),
        allowNull: false,
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
    await queryInterface.dropTable('group_activities');
  }
};