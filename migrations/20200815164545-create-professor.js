'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('professors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,       
        references: { model: 'users', key: 'id' }
      },
      valuation: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addColumn(
          'professors',
          'deletedAt',
          {
              type: Sequelize.DATE,
              allowNull: true,
              validate: {
              }
          });
  },
  
  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('professors');
    await queryInterface.removeColumn( 'professors','deletedAt');
  }
};
