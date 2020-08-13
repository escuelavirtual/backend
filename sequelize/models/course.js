const Sequelize = require("sequelize");
const {sequelize} = require("../../util/database");

const Course = sequelize.define('course', {
  id_course : {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: Sequelize.STRING,
    allowNull : false
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
    allowNull: false,
    defaultValue: false,
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  rating:{
    type:Sequelize.DOUBLE,
    allowNull:true
  },
  category:{
    type:Sequelize.STRING,
    allowNull:false
  },
  status:{
    type:Sequelize.STRING,
    allowNull:true
  }
});

module.exports = Course
