'use strict';
const ProfessorFactory = require("../factories/ProfessorsFactory")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('professors',ProfessorFactory(3));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('professors',null,{});

  }
};
