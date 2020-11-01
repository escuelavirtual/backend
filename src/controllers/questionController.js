const QuestionService = require("../services/questionService");
const ExamService = require("../services/examService");

class QuestionController {

    static getQuestion(req, res) {
        return QuestionService.findById(req.params.id)
            .then((data) => {
                if (data) {
                    return res.status(200).json({ message: "Consulta successfully", data });
                } else {
                    return res.status(404).json({ err: "There is no question" });
                }
            })
            .catch((err) => res.status(500).json({ err }));
    }

    static getAll(req, res) {
        return QuestionService.show(req.body.id)
            .then((data) => {
                if (data && data.length > 0) {
                    return res.status(200).json({ message: "Query executed correctly", data });
                } else {
                    return res.status(404).json({ err: "Question not found" });
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
        return Promise.all([ExamService.findById(question.examId), QuestionService.findExists(question), QuestionService.validateParameters(question)])
            .then(exam => {
                if (exam[0] && exam[0].publishedAt === null && exam[1]) {
                    return QuestionService.create(question);
                }
                return Promise.reject("Exam does not exist");
            })
            .then((data) => {
                if (data) return res.status(200).json({ message: "Create successfully", data });
                return res.status(500).json({ err: "Registry creation error" });
            })
            .catch((err) => res.status(500).json({ err }));
    }

    static async updateQuestion(req, res) {
        const { id } = req.params;
        let change = req.body;
        return Promise.all([ExamService.findById(req.body.examId), QuestionService.findById(id)])
            .then(examQuestion => {
                console.log('sss ', examQuestion)
                if (examQuestion[0] && examQuestion[0].publishedAt === null && examQuestion[1]) {
                    return QuestionService.changeType(change, examQuestion[1]);
                }
                return Promise.reject("Exam or Questin does not exist");
                //return res.status(500).json({ err: "Exam not found" });
            })
            .then(data => {
                if (data) return QuestionService.update(req.body, id);
                return res.status(500).json({ err: "There is an error in the parameters" });
            })
            .then(question => {
                if (question) return res.status(200).json({ message: "Sucessfull Ejecution", data: question });
                return res.status(500).json({ err: "Error in update" });
            })
            .catch(err => res.status(500).json({ err }));
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const question = await QuestionService.delete(id);
            return res.status(200).json({ message: "Delete Sucessfull", data: question });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }
}

module.exports = QuestionController;