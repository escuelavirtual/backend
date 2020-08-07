const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

//creation of the service
const app = express();

//connecting to database
connectDB();

//MIDDLEWARES

//initialize cors
app.use(cors());

//enable express.json
app.use(express.json({ extended: true }));

//app port
const port = process.env.PORT || 4000;

//import routes
app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
//

//home page
app.get("/", (req, res) => {
  res.send("hello world");
});

//run app
app.listen(port, "0.0.0.0", () => {
  console.log(`run app from the port ${port}`);
});
