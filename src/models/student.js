<<<<<<< HEAD:sequelize/models/student.js
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
=======
const { Model } = require("sequelize");
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      model.belongsTo(User);
    }
  };

  Student.init({
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student',
  });

  return Student;
};
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa:src/models/student.js
