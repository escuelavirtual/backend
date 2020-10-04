"use strict";
const faker = require("faker");

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [
            { code: "rta21", questionId: 2, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: "rta22", questionId: 2, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: "rta23", questionId: 2, content: faker.name.findName(), isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
            { code: "rta31", questionId: 3, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: "rta32", questionId: 3, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: "rta33", questionId: 3, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: "rta42", questionId: 5, content: "70", isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert("answers", obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("answers", null, {});
    }
};