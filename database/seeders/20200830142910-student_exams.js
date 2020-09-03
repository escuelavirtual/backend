'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let obj = [
            { student_id: 1, exam_id: 1, createdAt: new Date(), updatedAt: new Date() },
            { student_id: 1, exam_id: 2, createdAt: new Date(), updatedAt: new Date() },
            { student_id: 1, exam_id: 3, createdAt: new Date(), updatedAt: new Date() },
            { student_id: 1, exam_id: 4, createdAt: new Date(), updatedAt: new Date() },
        ];
        await queryInterface.bulkInsert('student_exams', obj, {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('student_exams', null, {});
    }
};