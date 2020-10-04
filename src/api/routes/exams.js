const express = require("express");
const router = express.Router();
const ExamController = require("../../controllers/examController");
const ExamService = require("../../services/examService");
const { validator } = require("../middlewares/validator");

router.post("/", validator(ExamService.validate()), ExamController.createExam);
router.get("/:id", ExamController.getExamComplet);
router.put("/:id", ExamController.updateNormal);
router.patch("/close/:id", ExamController.close);

module.exports = router;

// con un parametro para completo o cabecera