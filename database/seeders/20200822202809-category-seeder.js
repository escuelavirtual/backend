'use strict';
const Factor = require("../class_seeders/index")

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('categories',Factor.getCategory());
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('categories', null, {});
  }
};
