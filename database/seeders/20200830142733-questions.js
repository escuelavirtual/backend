"use strict";
const faker = require("faker");
module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [
            { examId: 1, typeQuestionId: 1, code: "p1", content: faker.name.findName(), minimum: 10, length: 100, createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, typeQuestionId: 2, code: "p2", content: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, typeQuestionId: 3, code: "p3", content: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, typeQuestionId: 4, code: "p4", content: faker.name.findName(), minimum: 10, tope: 100, createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, typeQuestionId: 4, code: "p5", content: faker.name.findName(), minimum: 10, tope: 100, createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert("questions", obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("questions", null, {});
    }
};