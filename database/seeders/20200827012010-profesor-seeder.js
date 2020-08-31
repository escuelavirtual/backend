'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('professors', [{
      userId: 1,
      valuation: 5,
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 2,
      valuation: 8,
         createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 3,
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
