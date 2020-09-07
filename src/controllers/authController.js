const User = require("../models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const { generateValidToken } = require("../services/generateToken");


exports.login = async (req, res, next) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(500).json({ errors: errors.array() });
    }

    try {

        const user = await User.findOne({ where: { email: req.body.email } });
        const password = await bcrypt.compare(req.body.password, user.password);

        if (!password || !user) {
            const error = new Error("User or Password does not match!");
            error.statusCode = 500;
            throw error;
        }

        const token = generateValidToken(user);

        return res.header('authorization', token).json({ token: token, AccountId: user.id });

    } catch (err) {   
        next(err);
        return err;
    }
};
