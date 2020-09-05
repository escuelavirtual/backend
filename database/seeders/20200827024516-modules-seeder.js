
const ModulesFactory = require("../factories/ModulesFactory")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('modules',ModulesFactory(3));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('modules',null,{});

  }
};
