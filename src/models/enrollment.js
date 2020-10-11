const Sequelize = require("sequelize");
const {sequelize} = require("../../config/db/mysql");

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

module.exports = Enrollment

