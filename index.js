const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const db = require('./util/database');
//library for the X-WWW-FORM-URLENCODED
const bodyParser = require('body-parser');

require('./sequelize/relations');
//creation of the service
const app = express();

//connecting to database
connectDB();
db.testDataBase();
//MIDDLEWARES

//initialize cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
//
//enable express.json
app.use(express.json({ extended: true }));

//app port
const port = process.env.PORT || 4000;

//import routes
app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/courses', require('./routes/courses'));
app.use('/api/v1/course',require('./routes/course'));
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
  res.send('hello world');
});

//run app
app.listen(port, '0.0.0.0', () => {
  console.log(`run app from the port ${port}`);
});
