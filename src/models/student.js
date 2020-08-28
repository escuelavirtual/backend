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