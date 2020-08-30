'use strict';
var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses', [{
      professorId:1,
      categoryId:1,
      title:faker.lorem.word(),
      description:faker.lorem.text(),
      isPrivate:faker.random.boolean(),
      invitationCode:faker.address.zipCode(),
      rating:faker.random.number(),
      status:"on",
      startedAt:new Date(),
      finishedAt:new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      professorId:2,
      categoryId:2,
      title:faker.lorem.word(),
      description:faker.lorem.text(),
      isPrivate:faker.random.boolean(),
      invitationCode:faker.address.zipCode(),
      rating:faker.random.number(),
      status:"on",
      startedAt:new Date(),
      finishedAt:new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      professorId:3,
      categoryId:3,
      title:faker.lorem.word(),
      description:faker.lorem.text(),
      isPrivate:faker.random.boolean(),
      invitationCode:faker.address.zipCode(),
      rating:faker.random.number(),
      status:"off",
      startedAt:new Date(),
      finishedAt:new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
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

