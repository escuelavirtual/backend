"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn(
            "courses",
            "deletedAt",
            {
                type: Sequelize.DATE,
                allowNull: true,
                validate: {
                }
            });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("courses" ,"deletedAt");
    }
};
