const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const {validationResult} = require("express-validator");
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {

    //validate errors on request
    const errors = validationResult(req)
    if(!errors.isEmpty()){return res.status(400).json({errors : errors.array()})}


}
