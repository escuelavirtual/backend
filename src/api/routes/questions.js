const express = require("express");
const router = express.Router();
const QuestionController = require("../../controllers/questionController");
const QuestionService = require("../../services/questionService");
const { validator } = require("../middlewares/validator");

router.post("/", validator(QuestionService.validate()), QuestionController.createQuestion);
router.get("/:id", QuestionController.getQuestion);
router.put("/:id", validator(QuestionService.validate()), QuestionController.updateQuestion);

module.exports = router;