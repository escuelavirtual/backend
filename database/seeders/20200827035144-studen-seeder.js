
const StudentsFactory = require("../factories/StudentsFactory")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students',StudentsFactory(3));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students',null,{});
  }
};

