const Sequelize = require("sequelize");
const {sequelize} = require("../../config/db/mysql");
const { Student } = require("./student");
const Course = require("./course");

const Enrollment = sequelize.define('enrollments', 
{   
    studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'students', key: 'id' }
    },
    courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'courses', key: 'id' }
    },
    calification: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
}, 
{ timestamps: false }
);


Enrollment.belongsTo(Course);
Enrollment.belongsTo(Student);

module.exports = Enrollment

