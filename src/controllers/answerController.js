const AnswerService = require("../services/answerService");
const questionService = require("../services/questionService");
const questionController = require("./questionController");
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
        let existeQuestion = {};
        return questionService.exist(req.body.question_id)
            .then(respuesta => {
                existeQuestion = respuesta;
                return AnswerService.validateParameters(respuesta, req.body);
            })
            .then(data => {
                const consulta = (existeQuestion.type_question_id === typeQuestion.QUESTIONABIERTA ? { where: { question_id: req.body.question_id } } : { where: { question_id: req.body.question_id, content: req.body.content } });
                return AnswerService.findOneBy(consulta);
            })
            .then(data => {
                if (data) return Promise.reject({ err: "The answer already exists. " + data.content });
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