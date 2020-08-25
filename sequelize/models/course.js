const Sequelize = require("sequelize");
const {sequelize} = require("../../config/db/mysql");

const Course = sequelize.define('courses', {
  id : {
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
  startedAt: {
    type: Sequelize.DATE
  },
  finishedAt: {
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
    type:Sequelize.INTEGER,
    allowNull:false
  },
  status:{
    type:Sequelize.STRING,
    allowNull:true
  }
},{
  paranoid:true
});

module.exports = Course
