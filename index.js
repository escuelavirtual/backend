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

//

//home page
app.get('/', (req, res) => {
    res.send('hello world');
});

//run app
app.listen(port, '0.0.0.0', () => {
<<<<<<< HEAD
    console.log(`arrancando la app desde el puerto ${port}`);
    console.log(process.env.SECRET)
=======
    console.log(`run app from the port ${port}`);
>>>>>>> 66494c0a9eb4120a5536c2d9a31eb58cf90a3af1
});