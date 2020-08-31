'use strict';
// const FactoriesFakesData = require("../FactoriesFakesDatas/index")
const CategoryFactory = require("../factories/CategoryFactory")

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('categories',CategoryFactory(6));
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('categories', null, {});
  }
};
