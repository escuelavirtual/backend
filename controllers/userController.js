const User = require("../models/user");
const {validationResult} = require("express-validator");


//create user

exports.createUser = async (req, res) => {

    //we check if there is an error with the request
    const errores = validationResult(req);
    if(!errores){
        return res.status(400).json({errores:errores.array()});
    }

    try{
        //create user with req.body
        const user = new User(req.body);

        //save user in the database
        await user.save()

        //return a json with the user
        res.json(user);
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"There was a mistake"});
    }
}