'use strict';
const faker = require('faker');

module.exports = {
    up: async(queryInterface, Sequelize) => {

        let obj = [
            { module_id: 1, type: '1', name_exam: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { module_id: 1, type: '1', name_exam: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { module_id: 1, type: '1', name_exam: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { module_id: 1, type: '1', name_exam: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('exams', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('exams', null, {}); // {type:'2'}
    }
};