'use strict';
const faker = require('faker');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [
            { code: 'rta31', questionId: 3, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta32', questionId: 3, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta33', questionId: 3, content: faker.name.findName(), isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta41', questionId: 4, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta42', questionId: 4, content: faker.name.findName(), isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta43', questionId: 4, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta51', questionId: 5, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta52', questionId: 5, content: faker.name.findName(), isTrue: 0, score: 0, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta53', questionId: 5, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta61', questionId: 6, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta62', questionId: 6, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta63', questionId: 6, content: faker.name.findName(), isTrue: 1, score: 5, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta7', questionId: 7, content: '70', isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
            { code: 'rta8', questionId: 8, content: '17', isTrue: 1, score: 10, createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('answers', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('answers', null, {});
    }
};