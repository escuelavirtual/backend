'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'deletedAt',
      {
          type: Sequelize.DATE,
          allowNull: true,
          validate: {
          }
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn( 'users','deletedAt');
  }
};
