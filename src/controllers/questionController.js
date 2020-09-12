const QuestionService = require("../services/questionService");

class questionController {

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
                exam_id: req.body.exam_id,
                type_question_id: req.body.type_question_id,
                code: req.body.code,
                content: req.body.content,
                minimum: req.body.minimum,
                tope: req.body.tope,
                length: req.body.length,
                help: req.body.help
            } //= req.body;
        return QuestionService.validarParameter(question)
            .then(data => QuestionService.findExist(question))
            .then(data => QuestionService.create(question))
            .then((data) => res.status(200).json({ message: "Create successfully", data }))
            .catch((err) => res.status(500).json({ err }));
    }
}

module.exports = questionController;