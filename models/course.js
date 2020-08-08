const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Course = sequelize.define("course", {

  id_course : {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  parts: {
    type: Sequelize.ARRAY,
    defaultValue: [],
  },

  title: {
    type: Sequelize.STRING,
    allowNull : false,
  },

  description: {
    type: Sequelize.STRING,
    allowNull : false,
  },

  summary: {
    type: Sequelize.STRING,
    allowNull : false,
  },

  start_date: {
    type: Sequelize.DATE
  },

  finish_date: {
    type: Sequelize.DATE,
  },

  requirements: {
    type: Sequelize.ARRAY,
    defaultValue: [],
  },

  students: {
    type: Sequelize.ARRAY,
    defaultValue: [],
  },

});

module.exports = Course
