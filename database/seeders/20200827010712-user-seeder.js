'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstname: 'Carlos',
      lastname: 'Sanchez',
      email:'carlos@hotmail.com',
      profile_image:"3214.jpg",
      password:'123456',
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Israel',
      lastname: 'Perez',
      email:'israel@hotmail.com',
      profile_image:"14787.jpg",
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Jose',
      lastname: 'Merino',
      email:'jose@hotmail.com',
      profile_image:"4874889.jpg",
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Raul',
      lastname: 'Dominguez',
      email:'raul@hotmail.com',
      profile_image:"321369.jpg",
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Angel',
      lastname: 'Torres',
      email:'angel@hotmail.com',
      profile_image:"47818.jpg",
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Maria',
      lastname: 'Ruiz',
      email:'maria@hotmail.com',
      profile_image:"1214.jpg",
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
