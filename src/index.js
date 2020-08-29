const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('./config/db/mongoose');
const cors = require('cors');
const mysql = require('../config/db/mysql');
const morgan = require("morgan");
const listEndpoints = require('express-list-endpoints');

//creation of the service
const app = express();

//connecting to database
mysql.testDataBase();

//MIDDLEWARES
//set morgan for codde http
app.use(morgan("dev"));

//initialize cors
app.use(cors());

//enable express.json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//app port
const port = process.env.PORT || 3000;

//require('./api/routes');

app.use("/api/v1/user", require("./api/routes/user"));
app.use("/api/v1/professors",require("./api/routes/professors"));
app.use("/api/v1/courses", require("./api/routes/courses"));
app.use("/api/v1/login",require("./api/routes/login"));
app.use("/api/v1/category",require("./api/routes/category"));

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

app.get("/", (req, res) => {
    res.send(listEndpoints(app));
});


//run app
app.listen(port, "0.0.0.0", () => {
    console.log(`run app from the port ${port}`);
});

module.exports = app;