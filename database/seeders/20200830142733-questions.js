'use strict';
const faker = require('faker');
module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [
            { exam_id: 1, type_question_id: 1, code: 'p1', content: faker.name.findName(), minimum: 9, length: 100, createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, type_question_id: 1, code: 'p2', content: faker.name.findName(), minimum: 1, length: 100, createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, type_question_id: 2, code: 'p3', content: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, type_question_id: 2, code: 'p4', content: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, type_question_id: 3, code: 'p5', content: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, type_question_id: 3, code: 'p6', content: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, type_question_id: 4, code: 'p7', content: faker.name.findName(), minimum: 1, tope: 100, createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, type_question_id: 4, code: 'p8', content: faker.name.findName(), minimum: 1, tope: 100, createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('questions', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('questions', null, {});
    }
};