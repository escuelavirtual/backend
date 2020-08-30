'use strict';
var faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('categories', [{
      name: faker.lorem.word(),
      slug: faker.lorem.slug(),
       createdAt: new Date(),
       updatedAt: new Date()
    },{
      name: faker.lorem.word(),
      slug: faker.lorem.slug(),
         createdAt: new Date(),
         updatedAt: new Date()
    },
    {
      name: faker.lorem.word(),
      slug: faker.lorem.slug(),
         createdAt: new Date(),
         updatedAt: new Date()
    },{
      name: faker.lorem.word(),
      slug: faker.lorem.slug(),
        createdAt: new Date(),
        updatedAt: new Date()
    },
  ]);
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('categories', null, {});
  }
};
