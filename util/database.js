require("dotenv").config({ path: "variables.env" });
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  { dialect: process.env.DB_TYPE, host: process.env.DB_HOST }
);

module.exports = sequelize;
