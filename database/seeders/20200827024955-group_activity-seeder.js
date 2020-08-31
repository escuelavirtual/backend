'use strict';
const GroupsActivity = require("../factories/GroupsActivity")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('group_activities',GroupsActivity(3));
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

