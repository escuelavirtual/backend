const express = require("express");
const router = express.Router();
const AnswerController = require("../../controllers/answerController");
const { validator } = require("../middlewares/validator");
const AnswerService = require("../../services/answerService");

router.post("/", validator(AnswerService.validate()), AnswerController.createAnswer);
router.get("/:id", AnswerController.getAnswer);
router.get("/question/:questionId", AnswerController.getByQuestion);
router.delete("/:id", AnswerController.deleteAnswer);
<<<<<<< HEAD
router.put("/:id", validator(AnswerService.validate()), AnswerController.updateNormal);
=======
router.put("/:id", AnswerController.updateAnswer);
>>>>>>> ee693a9f76585cfafffae1d7281a57c985144e93
router.get("/", AnswerController.listAll);

module.exports = router;