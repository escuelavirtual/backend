const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//creation of the service
const app = express();

//connecting to database
connectDB();

//MIDDLEWARES

//initialize cors
app.use(cors());

//enable express.json
app.use(express.json({extended : true}));

//app port
const port = process.env.PORT || 4000;

//import routes
app.use("/api/user/v1", require("./routes/user"));
//

//home page
app.get('/', (req, res) => {
    res.send('hello world');
});

//run app
app.listen(port, '0.0.0.0', () => {
    console.log(`run app from the port ${port}`);
});