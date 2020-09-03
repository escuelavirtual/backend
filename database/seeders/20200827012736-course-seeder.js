
const CoursesFactory = require("../factories/CoursesFactory")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses',CoursesFactory(3));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses',null,{});

  }
};

