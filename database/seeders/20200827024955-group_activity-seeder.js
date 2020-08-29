'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('group_activities', [{
      moduleId: 1,
      activity_name:'derrivadas en matematicas',
      instructions:'realizar del 1 al 10',
      grade:5,
      comments:'ninguno',
       createdAt: new Date(),
      updatedAt: new Date()
    },{
      moduleId: 2,
      activity_name:'Analisis de datos en python',
      instructions:'uso de pandas y numpy',
      grade:6,
      comments:'ninguno',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      moduleId: 3,
      activity_name:'calculo del numero cuantico y sping magnetico del 1 al 10',
      instructions:'realizar del 1 al 10',
      grade:7,
      comments:'ninguno',
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

