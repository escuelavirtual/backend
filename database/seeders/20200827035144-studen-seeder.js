'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [{
      group_activityId: 1,
      userId:4,
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      group_activityId: 2,
      userId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      group_activityId:3,
      userId:6,
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

