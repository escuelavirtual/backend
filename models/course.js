const Sequelize = require("sequelize");
const {sequelize} = require("../util/database");

const Course = sequelize.define('course', {
  id_course : {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull : false,
  },
  description: {
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
    type: Sequelize.STRING
  },
  isPrivate: {  
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Course
