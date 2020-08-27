'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Enrollments', {
      //se require comentar students
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id' }
      },
      course_id: {
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
    await queryInterface.dropTable('Enrollments');
  }
};