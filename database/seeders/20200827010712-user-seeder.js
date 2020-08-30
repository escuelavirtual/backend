'use strict';
const Factor = require("../class_seeders/index")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',Factor.getUsers());
  },
  down: async (queryInterface, Sequelize) => {
  }
};
