'use strict';

const CategoryFactory = require("../factories/CategoryFactory")


// La solución fue guardar los campos semilla en una variable de matriz y luego pasar la variable a la función:
module.exports = {
  up: async (queryInterface, Sequelize) => {
  //  return queryInterface.bulkInsert('categories',CategoryFactory(6));
     return queryInterface.bulkInsert('categories',CategoryFactory(6));

  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('categories', null, {});
  }
};
