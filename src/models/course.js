const Sequelize = require("sequelize");
const { sequelize } = require("../../config/db/mysql");

const Course = sequelize.define('courses', {
  id: {
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
  requirements: {
    type: Sequelize.STRING
  },
  isPrivate: {  
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  invitationCode: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true
  },
  rating:{
    type:Sequelize.DOUBLE,
    allowNull:true
  },
  categoryId:{
    type:Sequelize.INTEGER,
    allowNull:true
  },
  status:{
    type:Sequelize.STRING,
    allowNull:true
  },
  startedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  finishedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  }
},{
  paranoid:true
});

//Course.belongsTo(Professor);

module.exports = Course
