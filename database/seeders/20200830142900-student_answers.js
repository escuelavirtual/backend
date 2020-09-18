'use strict';
const faker = require('faker');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [

            { examId: 1, questionId: 1, typeQuestionId: 1, studentId: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, questionId: 2, typeQuestionId: 1, studentId: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, questionId: 3, typeQuestionId: 2, studentId: 1, date_of_answer: new Date(), code_answer: 'id1,cod1', student_answer: 'content 1', createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, questionId: 4, typeQuestionId: 2, studentId: 1, date_of_answer: new Date(), code_answer: 'id2,cod2', student_answer: 'content 2', createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, questionId: 5, typeQuestionId: 3, studentId: 1, date_of_answer: new Date(), code_answer: 'id1,cod1;id2,cod2', student_answer: 'content 1;content 2', createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, questionId: 6, typeQuestionId: 3, studentId: 1, date_of_answer: new Date(), code_answer: 'id1,cod1;id2,cod2', student_answer: 'content 1;content 2', createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, questionId: 7, typeQuestionId: 4, studentId: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.random.number(), createdAt: new Date(), updatedAt: new Date() },
            { examId: 1, questionId: 8, typeQuestionId: 4, studentId: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.random.number(), createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('student_answers', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('student_answers', null, {});
    }
};