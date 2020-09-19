const express = require("express");
const router = express.Router();
const AnswerController = require("../../controllers/answerController");
const { validator } = require("../middlewares/validator");
const AnswerService = require("../../services/answerService");

router.post("/", validator(AnswerService.validate()), AnswerController.createAnswer);
router.get("/:id", AnswerController.getAnswer);
router.get("/question/:questionId", AnswerController.getByQuestion);
router.delete("/:id", AnswerController.deleteAnswer);
router.put("/:id", AnswerController.updateAnswer);
router.get("/", AnswerController.listAll);

module.exports = router;