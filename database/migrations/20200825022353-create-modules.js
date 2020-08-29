'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('modules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD:migrations/20200825022353-create-modules.js
     courses_id: {
=======
     courseId: {
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa:database/migrations/20200825022353-create-modules.js
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'courses', key: 'id' }
      },
      title:{
        type:Sequelize.STRING,
        allowNull: false
      },
      description:{
        type:Sequelize.TEXT,               
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
    await queryInterface.dropTable('modules');
  }
};