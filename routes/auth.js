const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const {check} = require('express-validator');
const auth = require('../middlewer/auth')

//login
router.post("/",[
        check("email", "Email required"),
        check("password","password required")
],
    authController.authenticateUser
)


module.exports = router;