'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [{
      group_activity_id: 1,
      user_id:1,
      code:'QSPQ-5',
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
//   group_activity_id: 2,
//   user_id:2,
//     code:'SGQL-5',
//     user_id: new Date(),
//   updatedAt: new Date()
// },
// {
//   group_activity_id:3,
//   user_id:3,
//   code:'XAQL-5',
//   createdAt: new Date(),
//   updatedAt: new Date()
// }