const Sequelize = require("sequelize");
const {sequelize} = require("../util/database");

const Course = sequelize.define('course', {
  id_course : {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_professor: {
    type: DataTypes.INTEGER,

    references: {
      // This is a reference to another model
      model: Professor,

      // This is the column name of the referenced model
      key: 'id_professor',
    }
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
  }
});

module.exports = Course
