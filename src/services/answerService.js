const Answer = require("../models/answer");
const { check } = require("express-validator");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class AnswerService {

    static validate() {
        return [
            check("code", "code is required").not().isEmpty().isAlphanumeric().isLength({ min: 2, max: 15 }),
            check("question_id", "question_id is required").not().isEmpty().isNumeric(),
            check("isTrue", "isTrue is required").isNumeric().isLength({ min: 1, max: 1 }),
            check("score", "score is required").isNumeric(),
        ];
    }

    static async show() {
        try {
            const answers = await Answer.findAll();
            if (answers) {
                return answers;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async create(data) {
        try {
            const { code, question_id, content, isTrue, score } = data;
            const answerCreated = await Answer.create({
                code,
                question_id,
                content,
                isTrue,
                score,
            });
            return answerCreated;
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async findById(id) {
        try {
            const foundAnswer = await Answer.findByPk(id);
            if (foundAnswer) {
                return foundAnswer;
            } else {
                return "Don't exists id";
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async findOneBy(consulta) {
        try {
            const answerExiste = await Answer.findOne(consulta);
            if (answerExiste) {
                return answerExiste;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async finAllBy(consulta) {
        try {
            const allAnswer = await Answer.findAll(consulta);
            if (allAnswer) {
                return allAnswer;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }
    static async delete(id) {
        try {
            const answer = await Answer.findByPk(id);
            if (answer) {
                await answer.destroy();
                return answer;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async update(data, id) {
        try {
            const { code, question_id, content, isTrue, score } = data;
            const foundAnswer = await Answer.findByPk(id);
            if (foundAnswer) {
                foundAnswer.update({
                    code,
                    question_id,
                    content,
                    isTrue,
                    score,
                });
                return foundAnswer;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }


    /***********************
     *  question abierta y numerica  solo puede tener una respuesta o graba una vez  y despues modifica
     *     !answer.isTrue no ingresa cuando vale 0
     *     en las preguntas abiertas no deberia guardar en content
     **/
    static validateParameters(question, answer) {
        return new Promise((resolve, reject) => { //  !answer.question_id || !question.content ||
            console.log("question", question.type_question_id);
            switch (question.type_question_id) {
                case typeQuestion.QUESTIONABIERTA:
                    if (!answer.code || !answer.score) { // || !answer.isTrue
                        reject("Faltan Parametros obligatorios");
                    } else {
                        resolve("Parametros correctos");
                    }
                    break;
                default:
                    if (!answer.code || !answer.content || !answer.score) { //!answer.isTrue || 
                        reject("Faltan parametros obligatorios");
                    } else {
                        resolve("Parametros correctos");
                    }
                    break;
            }
        });
    }

    /******************
     * 1. ver si exsite la misma respuesta
     * 2. si es abierta o numerica debe tener solo una respuesta para cada question
     **/
    static async getExisteAnswer(question, req, res) {
        try {
            const { id } = req.params;
            let consulta = {};
            consulta = (question.type_question_id === typeQuestion.QUESTIONABIERTA ? { where: { question_id: req.body.question_id } } : { where: { question_id: req.body.question_id, content: req.body.content } });
            const existeAnswer = await AnswerService.findOneBy(consulta);
            return res.status(200).json(existeAnswer);
        } catch (err) {
            return res.status(500).json({ err });
        }
    }


}
module.exports = AnswerService;