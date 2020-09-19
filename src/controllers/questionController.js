const QuestionService = require("../services/questionService");
const ExamService = require("../services/examService");

class QuestionController {

    static getQuestion(req, res) {
        return QuestionService.findById(req.params.id)
            .then((data) => {
                if (data) {
                    return res.status(200).json({ message: "Consulta successfully", data });
                } else {
                    return res.status(404).json({ err: "No existe question" });
                }
            })
            .catch((err) => res.status(500).json({ err }));
    }

    static createQuestion(req, res) {
        const question = {
                examId: req.body.examId,
                typeQuestionId: req.body.typeQuestionId,
                code: req.body.code,
                content: req.body.content,
                minimum: req.body.minimum,
                tope: req.body.tope,
                length: req.body.length,
                help: req.body.help
            } //= req.body;
        return QuestionService.validateParameters(question)
            .then(data => ExamService.findById(question.examId))
            .then(data => {
                if (data) {
                    return QuestionService.findExists(question);
                } else {
                    return res.status(500).json({ err: "Exam does not exist" });
                }
            })
            .then(data => QuestionService.create(question))
            .then((data) => res.status(200).json({ message: "Create successfully", data }))
            .catch((err) => res.status(500).json({ err }));
    }
}

module.exports = QuestionController;