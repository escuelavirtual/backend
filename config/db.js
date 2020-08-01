const mongoose = require('mongoose');
require('dotenv').config();

//connecting and configuration database

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useFindAndModify : true
        });
        console.log('connected to the database...');
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
