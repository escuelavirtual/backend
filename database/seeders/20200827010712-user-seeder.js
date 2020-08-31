'use strict';
const UsersFactory = require("../factories/UsersFactory")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',UsersFactory(6));
  },
  down: async (queryInterface, Sequelize) => {
  }
};
