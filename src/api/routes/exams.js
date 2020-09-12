const express = require("express");
const router = express.Router();
const examController = require("../../controllers/examController");
const ExamService = require("../../services/examService");
const { validator } = require("../middlewares/validator");

router.post("/", validator(ExamService.validate()), examController.createExam);
router.get("/:id", examController.getExamComplet);

module.exports = router;

// con un parametro para completo o cabecera