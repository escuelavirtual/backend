const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("../config/db/mysql");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require('path');

//creation of the service
const app = express();

// app.engine("hbs", exphbs({extname: ".hbs"}));



app.set("view engine", "hbs");

app.engine(".hbs",exphbs({
    layoutsDir: path.join(__dirname,"../views/layouts"),
    defaultLayout:'main',
    extname: ".hbs",
    partialsDir: path.join(__dirname,"../views/partials"),
}))

// exphbs.registerPartial("navbar",'{{navbar}}')

// console.log(path.join(__dirname,"../views/layouts"))

app.set('views', path.join(__dirname,'../views'));


console.log(__dirname)
app.use(express.static(path.join(__dirname, '/public')));



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

require('./api/routes/index')(app);
require('./web/routes')(app);


//run app
app.listen(port, "0.0.0.0", () => {
    console.log(`run app from the port ${port}`);
});

module.exports = app;
