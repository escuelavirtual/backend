const User = require("../models/user"); // aacaa
const bcrypt = require("bcrypt");
var e = require('debug')("error:data")


class UserService {
    constructor(req, res){
        this.req = req;
        this.res = res;
    }
    static async CreateUser (body,res){
    try{
       
        const {firstname,lastname,email,password} = body
        const user =await User.create({
            firstname,lastname,email,password:bcrypt.hashSync(password,10)
        })
        return user
    }catch(err){
         e.log(err);
         return res.status(500).json({message:'Problem register User'});
    }
    }
}
module.exports = UserService;