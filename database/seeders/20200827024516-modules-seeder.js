'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('modules', [{
      courseId: 1,
      description: 'El curso brinda programa especial de Matematica',
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      courseId: 2,
      description: 'El curso brinda programa especial de Programacion',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      courseId: 3,
      description: 'El curso brinda programa especial de Mecanica cuantica',
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
