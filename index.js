const express = require('express');

const mongoose = require('./config/db/mongoose');
const cors = require('cors');
const mysql = require('./config/db/mysql');

const listEndpoints = require('express-list-endpoints');

require('./sequelize/relations');

//creation of the service
const app = express();

//connecting to database
//mongoose.testDataBase();
mysql.testDataBase();
//MIDDLEWARES

//initialize cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//enable express.json
app.use(express.json({ extended: true }));

//app port
const port = process.env.PORT || 4000;

//import routes
app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/courses', require('./routes/courses'));
app.use('/api/v1/login',require('./routes/login'));
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
//

//home page
app.get('/', (req, res) => {
  res.send(listEndpoints(app));
});

//run app
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`run app from the port ${port}`);
});

module.exports = app;
