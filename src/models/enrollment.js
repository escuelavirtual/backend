const Sequelize = require("sequelize");
const {sequelize} = require("../../config/db/mysql");
const { Student } = require("./student");
const Course = require("./course");

const Enrollment = sequelize.define('enrollments', 
{
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

