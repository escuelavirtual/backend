'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enrollments', [{
      studentId: 1,
      courseId:1,
      calification:15
    },{
      studentId: 2,
      courseId:2,
      calification:10
    },{
      studentId: 3,
      courseId:3,
      calification:16
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

