const express = require("express");
const router = express.Router();
const answerController = require("../../controllers/answerController");
const { validator } = require('../middlewares/validator');
const AnswerService = require("../../services/answerService")

router.post("/", validator(AnswerService.validate()), answerController.createAnswer);
router.get("/listOne/:id", answerController.getAnswer);
router.get("/question/:question_id", answerController.getAnswerQuestion);
router.delete('/:id', answerController.deleteAnswer);
router.put('/:id', answerController.updateAnswer);
router.get('/', answerController.listAll);

module.exports = router;
