const express = require("express");
const router = express.Router();
const {check} = require("express-validator"); //library for validation user data
const StudentsController = require("../../controllers/studentsController");

router.post("/", StudentsController.create);

router.get("/:id",StudentsController.getStudent);

module.exports = router;