import express from "express";
import cors from "cors";
import mysql from "./config/db/mysql";
import listEndpoints from "express-list-endpoints";
import morgan from "morgan";
import assert from 'assert';

// require("./sequelize/relations");
import "./sequelize/relations";

//creation of the service
const app = express();

//connecting to database
mysql.testDataBase();
//MIDDLEWARES
//set morgan for codde http
app.use(morgan("dev"));

//initialize cors
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//enable express.json
app.use(express.json({ extended: true }));

//app port
const port = process.env.PORT || 4000;

//import routes
app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/courses", require("./routes/courses"));
app.use("/api/v1/login",require("./routes/login"));
app.use("/api/v1/category",require("./routes/category"));
app.use((error, req, res) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});
//

//home page
app.get("/", (req, res) => {
    res.send(listEndpoints(app));
});


//run app
app.listen(port, "0.0.0.0", () => {
    console.log(`run app from the port ${port}`);
});

export default app;
