const express = require("express");
const router = express.Router();
const { check } = require("express-validator"); //library for validation user data
const answerController = require("../../controllers/answerController");

router.post("/", [
    check('code', 'code is required').not().isEmpty(),
    check('question_id', 'question_id is required').not().isEmpty(),
    check('content', 'content is required').not().isEmpty(),
    check('isTrue', 'isTrue is required').not().isEmpty(),
    check('score', 'score is required').not().isEmpty(),
], answerController.createAnswer);
router.get("/listOne/:id", answerController.getAnswer);
router.get("/question/:question_id", answerController.getAnswerOfQuestion);
router.delete('/:id', answerController.deleteAnswer);
router.put('/:id', answerController.updateAnswer);
router.get('/', answerController.listAll);

module.exports = router;