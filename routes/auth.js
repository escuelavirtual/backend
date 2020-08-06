const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { check } = require("express-validator");

//login
router.post(
  "/register",
  [check("email", "Email required"), check("password", "password required")],
  authController.register
);

router.post(
  "/login",
  [check("email", "Email required"), check("password", "password required")],
  authController.register
);

module.exports = router;
