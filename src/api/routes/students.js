const express = require("express");
const router = express.Router();
const StudentsController = require("../../controllers/studentsController");
const { validator } = require('../middlewares/validator');
const UserService = require('../../services/userService');

router.post("/", validator(UserService.validate()), StudentsController.create);

router.get("/:id", StudentsController.show);

module.exports = router;
