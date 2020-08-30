'use strict';
const faker = require("faker")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('group_activities', [{
      moduleId: 1,
      activity_name:faker.lorem.word(),
      instructions:faker.commerce.productDescription(),
      grade:faker.random.number(),
      comments:faker.lorem.paragraph(),
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      moduleId: 2,
      activity_name:faker.lorem.word(),
      instructions:faker.commerce.productDescription(),
      grade:faker.random.number(),
      comments:faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      moduleId: 3,
      activity_name:faker.lorem.word(),
      instructions:faker.commerce.productDescription(),
      grade:faker.random.number(),
      comments:faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
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

