const User = require("../models/user");
const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {

    //we check if there is an error with the request
    const err = validationResult(req);
    if(!err){
        return res.status(500).json({err: err.array()});
    }

    try{
        //create user with req.body
        //const user = new User(req.body);
        console.log(req.body)
        const user= await User.create({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,10)
        })
        //save user in the database
        //await user.save()

        //return a json with the user
        res.status(201).json(user);
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"There was a mista0ke"});
    }
}
