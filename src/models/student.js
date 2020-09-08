const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");
const Course = require("./course");

const Student = sequelize.define("students", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
    }
},{
    paranoid:true
});
Student.hasMany(Course);



module.exports = Student;