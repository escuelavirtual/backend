'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('courses', [{
      professorId:1,
      categoryId:1,
      title: "Matematica",
      description:"matematica introduccion",
      isPrivate:1,
      invitationCode:"ASDQ",
      rating:5,
      status:"on",
      startedAt:"2018/05/05",
      finishedAt:"2019/06/10",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      professorId:2,
      categoryId:2,
      title: "Programacion",
      description:"introduccion a programacion",
      isPrivate:1,
      invitationCode:"DQW15",
      rating:8,
      status:"on",
      startedAt:"2018/06/05",
      finishedAt:"2019/07/15",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      professorId:3,
      categoryId:3,
      title: "Mecanica Cuantica",
      description:"introduccion a mecanica cuantica",
      isPrivate:0,
      invitationCode:"DFGQ46",
      rating:6,
      status:"off",
      startedAt:"2018/06/06",
      finishedAt:"2019/07/15",
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

