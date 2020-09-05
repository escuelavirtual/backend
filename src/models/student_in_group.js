const Sequelize = require('sequeleze');
const sequelize = require('../../config/db/mysql');
//This importation will be used due to the relation is many to many
const GroupActivity = require('./groupActivity');
const Student = require('./student');

const Student_in_group = sequelize.define("students_in_groups");

Student_in_group.belongsTo(GroupActivity);
Student_in_group.belongsTo(Student);