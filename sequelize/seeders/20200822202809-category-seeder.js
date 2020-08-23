'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('categories', [{
      name: 'Dessarrollo Web',
      slug: 'desarrollo-web',
       createdAt: new Date(),
      updatedAt: new Date()
    },{
        name: 'Matematicas',
        slug: 'Matematicas',
         createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        name: 'Fisica',
        slug: 'Fisica',
         createdAt: new Date(),
      updatedAt: new Date()
    },{
        name: 'Programacion',
        slug: 'Programacion',
         createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('categories', null, {});
  }
};
