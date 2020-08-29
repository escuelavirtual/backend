'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      firstname: 'Carlos',
      lastname: 'Sanchez',
      email:'carlos@hotmail.com',
      profile_image:'65497797.jpg',
      password:'123456',
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Israel',
      lastname: 'Perez',
      email:'israel@hotmail.com',
      profile_image:'13547946.jpg',
      password:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Jose',
      lastname: 'Merino',
      email:'jose@hotmail.com',
      profile_image:'4916474.jpg',
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
