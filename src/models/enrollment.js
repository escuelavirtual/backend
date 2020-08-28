const Sequelize = require("sequelize");
const {sequelize} = require("../../config/db/mysql");
const Enrollment = sequelize.define('Enrollment', 
  {}, 
{ timestamps: false }
);
module.exports = Enrollment

