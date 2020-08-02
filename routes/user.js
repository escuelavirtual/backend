const express = require("express");
const router = express.Router();
const {check} = require("express-validator"); //library for validation user data
const userController = require("../controller/userController");

//create user
//this endpoint receives the path and middlewares for the user data
router.post("/", [
    check('name', 'name is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty()
], userController.createUser);

module.exports = router;