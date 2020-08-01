const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//creamos el servidor
const app = express();

//conectamos a la base de datos
conectarDB();


//MIDDLEWARES
//inicializamos las cors
app.use(cors());

//habilitamos express.json
app.use(express.json({extended : true}));



//puerto de la app
const port = process.env.PORT || 4000;

//importamos las rutas

//

//definir la pagina principal
app.get('/', (req, res) => {
    res.send('hello world');
});

//arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`arrancando la app desde el puerto ${port}`);
});