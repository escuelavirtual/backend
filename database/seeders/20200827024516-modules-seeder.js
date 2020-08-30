'use strict';
var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('modules', [{
      courseId: 1,
      title:faker.lorem.word(),
      description: faker.lorem.text(),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      courseId: 2,
      title:faker.lorem.word(),
      description: faker.lorem.text(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      courseId: 3,
      title:faker.lorem.word(),
      description:faker.lorem.text(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
