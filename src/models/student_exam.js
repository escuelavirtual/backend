const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");

const Student_Exam = sequelize.define('student_exams', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id' }
    },
    exam_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'exams', key: 'id' }
    },
    calification: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
}, {
    paranoid: true
});

module.exports = Student_Exam;