const AnswerService = require("../services/answerService");
const questionService = require("../services/questionService");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class answerController {

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
        return questionService.findById(req.body.question_id)
            .then(data => {
                if (data) {
                    existsQuestion = data;
                    const answerVerify = req.body;
                    answerVerify.type_question_id = data.type_question_id;
                    return AnswerService.validateParameters(answerVerify);
                } else {
                    return Promise.reject({ err: "The question not exists. " });
                }
            })
            .then(data => {
                const query = ((existsQuestion.type_question_id === typeQuestion.QUESTIONABIERTA || existsQuestion.type_question_id === typeQuestion.QUESTIONNUMERICA) ? { where: { question_id: req.body.question_id } } : { where: { question_id: req.body.question_id, content: req.body.content } });
                return AnswerService.findOneBy(query);
            })
            .then(data => {
                if (data) return Promise.reject({ err: "The answer already exists. " });
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
            const { question_id } = req.params;
            const consulta = { where: { question_id: question_id } };
            const getanswer = await AnswerService.findAllBy(consulta);
            return res.status(200).json({ message: "Sucessfull Ejecution", data: getanswer });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    static async updateAnswer(req, res) {
        try {
            const { id } = req.params;
            const updateanswer = await AnswerService.update(req.body, id);
            return res.status(200).json({ message: "Sucessfull Ejecution", data: updateanswer });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    static async deleteAnswer(req, res) {
        try {
            const { id } = req.params;
            const deleteanswer = await AnswerService.delete(id);
            return res.status(200).json({ message: "Delete Sucessfull", data: deleteanswer });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }
}
module.exports = answerController;