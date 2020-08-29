'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enrollments', [{
      id_student: 1,
      id_course:1,
       createdAt: new Date(),
      updatedAt: new Date()
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

// ,{
//   id_student: 2,
//   id_course:2,
//      createdAt: new Date(),
//   updatedAt: new Date()
// },{
//   id_student: 3,
//   id_course:3,
//   createdAt: new Date(),
//   updatedAt: new Date()
// }