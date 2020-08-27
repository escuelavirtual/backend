const Sequelize = require('sequelize');
const {sequelize} = require('../../config/db/mysql');

const Student = sequelize.define('students', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
