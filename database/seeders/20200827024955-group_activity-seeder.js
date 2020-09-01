
const GroupsActivity = require("../factories/GroupsActivity")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('group_activities',GroupsActivity(3));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('group_activities',null,{});
  }
};

