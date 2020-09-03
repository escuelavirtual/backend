'use strict';
const faker = require('faker');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [
            { code: 'rta31', question_id: 3, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta32', question_id: 3, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta33', question_id: 3, content: faker.name.findName(), isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta41', question_id: 4, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta42', question_id: 4, content: faker.name.findName(), isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta43', question_id: 4, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta51', question_id: 5, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta52', question_id: 5, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta53', question_id: 5, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta61', question_id: 6, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta62', question_id: 6, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta63', question_id: 6, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta7', question_id: 7, content: '70', isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta8', question_id: 8, content: '17', isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('answers', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('answers', null, {});
    }
};