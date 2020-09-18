const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");

const Student_Answer = sequelize.define('student_answers', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    examId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'exams', key: 'id' }
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'questions', key: 'id' }
    },
    typeQuestionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'type_questions', key: 'id' }
    },
    studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id' }
    },
    date_of_answer: {
        type: Sequelize.DATE
    },
    satisfactory_YN: {
        type: Sequelize.STRING
    },
    code_answer: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    student_answer: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    comments: {
        type: Sequelize.STRING
    },
    other: {
        type: Sequelize.STRING
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

module.exports = Student_Answer;