'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('professors', [{
      user_id: 1,
      valuation: 5,
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 2,
      valuation: 8,
         createdAt: new Date(),
      updatedAt: new Date()
    },{
      user_id: 3,
      valuation: 6,
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
