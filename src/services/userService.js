const User = require("../models/user");
const bcrypt = require("bcrypt");
const e = require('debug')("error:data");
const { body } = require('express-validator');

class UserService {

    static validate(){
        return [
            body('email').isEmail().isLength({ min: 3 }),
            body('password').isLength({ min: 6 }),
            body('firstname').notEmpty().isLength({ min: 3 }),
            body('lastname').notEmpty().isLength({ min: 3 })
        ];
    }

    static async createUser(data) {
        try {

            const { firstname, lastname, email, password } = data
            const user = await User.create({
                firstname, lastname, email, password: bcrypt.hashSync(password, 10)
            })
            return user;

        } catch (err) {
            e(err);
            return new Error('An error has ocurred');
        }
    }
}
module.exports = UserService;