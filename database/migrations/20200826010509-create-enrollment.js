'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enrollments', {
      //se require comentar students
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id' }
      },
      courseId: {
         type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'courses', key: 'id' }
      },
      calification:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enrollments');
  }
};