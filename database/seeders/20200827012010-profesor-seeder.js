'use strict';
const Factor = require("../class_seeders/index")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('professors',Factor.getProfessors());
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
