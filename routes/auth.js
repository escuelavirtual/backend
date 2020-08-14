const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");


router.post(
  "/login",
  [check("email", "Email required"), check("password", "password required")],
  authController.login
);

module.exports = router;
