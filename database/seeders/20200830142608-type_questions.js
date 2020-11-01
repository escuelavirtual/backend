'use strict';
const faker = require('faker');
module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { id: 1, type_question: '1', content: 'abierta', createdAt: new Date(), updatedAt: new Date() },
            { id: 2, type_question: '2', content: 'cerrada', createdAt: new Date(), updatedAt: new Date() },
            { id: 3, type_question: '3', content: 'multiple', createdAt: new Date(), updatedAt: new Date() },
            { id: 4, type_question: '4', content: 'numerica', createdAt: new Date(), updatedAt: new Date() },
        ];

        await queryInterface.bulkInsert('type_questions', data, {});

    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('type_questions', null, {});

    }
};