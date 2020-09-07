const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { generateValidToken } = require("../services/generateToken");

class  LoginService {
    static async login(data,res,next) {
        try {

            const user = await User.findOne({ where: { email: data.email } });
            const password = await bcrypt.compare(data.password, user.password);

            if (!password || !user) {
                const error = new Error("User or Password does not match!");
                error.statusCode = 500;
                throw error;
            }

            const token = generateValidToken(user.dataValues);

            return res.header('authorization', token).json({ token: token, AccountId: user.id });

        } catch (err) {   
            next(err);
            return err;
        }
    }
}
   
module.exports=LoginService;