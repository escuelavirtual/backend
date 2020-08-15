const User = require("../sequelize/models/user");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = (req, res) => {
  //validate errors on request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //TODO:
  //DB LOGIC
  //BCRYPT LOGIC
};

exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const email = req.body.email;
    const password = req.body.password;

    const fetchedUser = await User.findAll({ where: { email: email } });
    if (!fetchedUser) {
      const error = new Error("User does not exists!");
      error.statusCode = 404;
      throw error;
    }

    const arePasswordEqual = await bcrypt.compare(password, fetchedUser.password);
    if (!arePasswordEqual) {
      const error = new Error("Passwords does not match!");
      error.statusCode = 400;
      throw error;
    }
    const token = jwt.sign(
      {
        username: fetchedUser.username,
        password: fetchedUser.password,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res
      .status(200)
      .json({ token: token, AccountId: fetchedUser.id});
    return;
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    return err;
  }
};

exports.verifyToken=(req,res,next)=>{
  let token=req.get('token');//Authenticate
  jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
    //decoded is the payload
    if(error){
      return res.status(401).json({
        ok:false,
        error
      });
    }
    req.user=decoded.user;  
  });
  next();
}