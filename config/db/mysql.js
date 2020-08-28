require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 100000,
        },
        logging: false,
    }
);

async function testDataBase() {
    try {
        await sequelize.authenticate();
    //console.log('Connection has been established successfully "MySQL".');
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

module.exports = { testDataBase, sequelize };
