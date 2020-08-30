'use strict';
// const faker = require("../../src/index")
const faker = require("faker")


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstname:faker.name.firstName(),
      lastname: faker.name.lastName(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email:faker.internet.email(),
      password:faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email:faker.internet.email(),
      password:faker.internet.password(),
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
