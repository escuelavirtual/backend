'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [
            { studentId: 1, examId: 1, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 1, examId: 2, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 1, examId: 3, createdAt: new Date(), updatedAt: new Date() },
            { studentId: 1, examId: 4, createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('student_exams', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('student_exams', null, {});
    }
};