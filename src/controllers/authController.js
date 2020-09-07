const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { generateValidToken } = require("../services/generateToken");
const { login } = require("../services/loginService");

class AuthController {
    static async login(req,res,next){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(500).json({ errors: errors.array() });
        }
        const data=req.body;
        login(data,res,next);
    }
}

module.exports=AuthController;