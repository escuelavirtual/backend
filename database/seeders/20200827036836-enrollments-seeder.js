'use strict';
const EnrollmentFactory = require("../factories/EnrollmentFactory")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enrollments',EnrollmentFactory(3));
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('enrollments', null, {});
  }
};

