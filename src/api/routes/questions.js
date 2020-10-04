const express = require("express");
const router = express.Router();
const QuestionController = require("../../controllers/questionController");
const QuestionService = require("../../services/questionService");
const { validator } = require("../middlewares/validator");

router.post("/", validator(QuestionService.validate()), QuestionController.createQuestion);
router.get("/:id", QuestionController.getQuestion);
<<<<<<< HEAD
router.put("/:id", validator(QuestionService.validate()), QuestionController.updateQuestion);
=======
>>>>>>> ee693a9f76585cfafffae1d7281a57c985144e93

module.exports = router;