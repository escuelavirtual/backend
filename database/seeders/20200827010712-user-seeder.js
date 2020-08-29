'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstname: 'Carlos',
      lastname: 'Sanchez',
      email:'carlos@hotmail.com',
      password:'123456',
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Israel',
      lastname: 'Perez',
      email:'israel@hotmail.com',
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Jose',
      lastname: 'Merino',
      email:'jose@hotmail.com',
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Raul',
      lastname: 'Dominguez',
      email:'raul@hotmail.com',
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Angel',
      lastname: 'Torres',
      email:'angel@hotmail.com',
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Maria',
      lastname: 'Ruiz',
      email:'maria@hotmail.com',
      password:'123456',
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
