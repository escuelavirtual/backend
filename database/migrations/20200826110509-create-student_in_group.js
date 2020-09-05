'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students_in_groups', {
      //se require comentar students
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id' }
      },
      group_activity_Id: {
         type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'group_activities', key: 'id' }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students_in_groups');
  }
};