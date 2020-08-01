const mongoose = require('mongoose');
require('dotenv').config();

//connectar y configurar la base de datos

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : true
        });
        console.log('Conectado a la base de datos');
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;