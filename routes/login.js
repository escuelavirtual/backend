  
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");


router.post("/", AuthController.login);

module.exports = router;