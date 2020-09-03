'use strict';
const faker = require('faker');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [

            { exam_id: 1, question_id: 1, type_question_id: 1, student_id: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, question_id: 2, type_question_id: 1, student_id: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.name.findName(), createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, question_id: 3, type_question_id: 2, student_id: 1, date_of_answer: new Date(), code_answer: 'id1,cod1', student_answer: 'content 1', createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, question_id: 4, type_question_id: 2, student_id: 1, date_of_answer: new Date(), code_answer: 'id2,cod2', student_answer: 'content 2', createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, question_id: 5, type_question_id: 3, student_id: 1, date_of_answer: new Date(), code_answer: 'id1,cod1;id2,cod2', student_answer: 'content 1;content 2', createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, question_id: 6, type_question_id: 3, student_id: 1, date_of_answer: new Date(), code_answer: 'id1,cod1;id2,cod2', student_answer: 'content 1;content 2', createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, question_id: 7, type_question_id: 4, student_id: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.random.number(), createdAt: new Date(), updatedAt: new Date() },
            { exam_id: 1, question_id: 8, type_question_id: 4, student_id: 1, date_of_answer: new Date(), code_answer: '0', student_answer: faker.random.number(), createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('student_answers', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('student_answers', null, {});
    }
};