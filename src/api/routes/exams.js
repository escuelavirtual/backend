const express = require("express");
const router = express.Router();
const ExamController = require("../../controllers/examController");
const ExamService = require("../../services/examService");
const { validator } = require("../middlewares/validator");

router.post("/", validator(ExamService.validate()), ExamController.createExam);
<<<<<<< HEAD
router.get("/:id", ExamController.getExam); //.getExamComplet);
router.put("/:id", ExamController.updateNormal);
router.patch("/close/:id", ExamController.close);
=======
router.get("/:id", ExamController.getExamComplet);
>>>>>>> ee693a9f76585cfafffae1d7281a57c985144e93

module.exports = router;

// con un parametro para completo o cabecera