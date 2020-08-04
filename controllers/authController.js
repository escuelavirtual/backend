const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

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

exports.login = (req, res, next) => {
  //validate errors on request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const email = req.body.email;
  const password = req.body.password;

  //TODO:
  //DB logic
  //JWT LOGIC
};
