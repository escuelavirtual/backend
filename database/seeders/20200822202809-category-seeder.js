'use strict';
// const FactoriesFakesData = require("../FactoriesFakesDatas/index")

// const CategoryFactory = require("../factories/CategoryFactory")

// const {factory} = require("../factories/factory")
const {factory} = require("../factories/factory")
// const {factory} = require("../factories/factory")

// La solución fue guardar los campos semilla en una variable de matriz y luego pasar la variable a la función:
module.exports = {
  up: async (queryInterface, Sequelize) => {
  //  return queryInterface.bulkInsert('categories',CategoryFactory(6));
     return queryInterface.bulkInsert('categories',factory('Category',3));

  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('categories', null, {});
  }
};
