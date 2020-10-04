const AnswerService = require("../services/answerService");
const QuestionService = require("../services/questionService");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class AnswerController {

    static async listAll(req, res) {
        try {
            const data = await AnswerService.show();
            return res.status(200).json({ message: "Ejecution Sucessfull", data });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    static createAnswer(req, res) {
        let existsQuestion = {};
        const answerVerify = req.body;
        // return QuestionService.findById(req.body.questionId)
        return QuestionService.findByIdActiva(req.body.questionId)
            .then(data => {
                // console.log('data ', JSON.stringify(data))
                if (data) {
                    existsQuestion = data;
                    answerVerify.typeQuestionId = data.typeQuestionId;
                    return AnswerService.validateParameters(answerVerify);
                }
                return Promise.reject("The question not exists. ");
            })
            .then(data => {
                const query = ((existsQuestion.typeQuestionId === typeQuestion.OPENQUESTION || existsQuestion.typeQuestionId === typeQuestion.NUMERICALQUESTION) ? { where: { questionId: req.body.questionId } } : { where: { questionId: req.body.questionId, content: req.body.content } });
                return AnswerService.findOneBy(query);
            })
            .then(data => {
                if (data) return Promise.reject("The answer already exists. ");
                else return AnswerService.create(req.body);
            })
            .then((data) => res.status(200).json({ message: "Successfully created", data }))
            .catch((err) => res.status(500).json({ err }));
    }

    static async getAnswer(req, res) {
        try {
            const { id } = req.params;
            const answers = await AnswerService.findById(id);
            return res.status(200).json({ message: "Sucessfull Ejecution", data: answers });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    static async getByQuestion(req, res) {
        try {
            const { questionId } = req.params;
            const query = { where: { questionId: questionId } };
            const answer = await AnswerService.findAllBy(query);
            return res.status(200).json({ message: "Sucessfull Ejecution", data: answer });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    static async updateAnswer(req, res) {
        try {
            const { id } = req.params;
            const answer = await AnswerService.update(req.body, id);
            return res.status(200).json({ message: "Sucessfull Ejecution", data: answer });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    /**
     * The complete registration must be sent, to validate
     * 
     */
    static async updateNormal(req, res) {
        const { id } = req.params;
        let answerVerify = Object.assign({}, req.body);
        //  delete answerVerify.questionId;
        return AnswerService.findExam(id, answerVerify.questionId)
            .then(exam => {
                if (exam && exam.publishedAt === null && exam.question) {
                    // answerVerify.questionId = exam.question.id;
                    answerVerify.typeQuestionId = exam.question.typeQuestionId;
                    return AnswerService.validateParameters(answerVerify);
                }
                return res.status(500).json({ err: "Exam not found" });
            })
            .then((data) => {
                if (data) return AnswerService.updateRestricted(req.body, id);
                return res.status(500).json({ err: "error in validate" });
            })
            .then(answer => {
                if (answer) return res.status(200).json({ message: "Sucessfull Ejecution", data: answer });
                return res.status(500).json({ err: "error en update of answer" });
            })
            .catch(err => res.status(500).json({ err }));
    }

    static async deleteAnswer(req, res) {
        try {
            const { id } = req.params;
            const answer = await AnswerService.delete(id);
            return res.status(200).json({ message: "Delete Sucessfull", data: answer });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }
}
module.exports = AnswerController;