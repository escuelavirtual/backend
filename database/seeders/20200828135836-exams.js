'use strict';
const faker = require('faker');

module.exports = {
    up: async(queryInterface, Sequelize) => {

        let obj = [
            { id: 1, moduleId: 1, type: '1', name: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { id: 2, moduleId: 1, type: '1', name: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { id: 3, moduleId: 1, type: '1', name: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { id: 4, moduleId: 1, type: '1', name: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('exams', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('exams', null, {}); // {type:'2'}
    }
};