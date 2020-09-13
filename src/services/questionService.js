/* eslint-disable indent */
const Question = require("../models/question");
const exam = require("./examService")
const { check } = require("express-validator");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class QuestionService {

    static validate() {

        return [
            check("exam_id", "exam_id is required").not().isEmpty(),
            check("type_question_id", "type_question_id is required").not().isEmpty().isNumeric().custom((val, { req }) => {
                if (!val || val < 0 || val > parseInt(typeQuestion.QUESTIONNUMERICA, 10) + 1) {
                    throw new Error("Mandatory parameters are missing or out of range");
                } else return true;
            }),
            check("code", "code is required").not().isEmpty().isAlphanumeric().isLength({ min: 2, max: 15 }),
            check("content", "content is required").not().isEmpty().isLength({ min: 2, max: 500 }),
            check("help", "help is optional").optional().isLength({ min: 2, max: 500 }),
            check("minimum").custom((minimum, { req }) => {
                if (!req.body.type_question_id || req.body.type_question_id < 1 || req.body.type_question_id > parseInt(typeQuestion.QUESTIONNUMERICA, 10) + 1) return true;
                switch (req.body.type_question_id) {
                    case typeQuestion.QUESTIONABIERTA:
                        if (!minimum || minimum < 1) throw new Error("Mandatory parameters are missing");
                        break;
                    case typeQuestion.QUESTIONNUMERICA:
                        if (!minimum || minimum === 0) throw new Error("Mandatory parameters are missing");
                        break;
                    default:
                        if (!minimum) return true;
                        else throw new Error("Parameter NOT required");
                }
                return true;
            }),
            check("tope").custom((val, { req }) => {
                if (!req.body.type_question_id || req.body.type_question_id < 1 || req.body.type_question_id > parseInt(typeQuestion.QUESTIONNUMERICA, 10) + 1) return true;
                switch (req.body.type_question_id) {
                    case typeQuestion.QUESTIONNUMERICA:
                        if (!val || val === 0) throw new Error("Mandatory parameters are missing");
                        break;
                    default:
                        if (!val) return true;
                        else throw new Error("Parameter NOT required");
                }
                return true;
            }),
            check("length").custom((val, { req }) => {
                if (!req.body.type_question_id || req.body.type_question_id < 1 || req.body.type_question_id > parseInt(typeQuestion.QUESTIONNUMERICA, 10) + 1) return true;
                switch (req.body.type_question_id) {
                    case typeQuestion.QUESTIONABIERTA:
                        if (!val || val < 1 || val > 500) throw new Error("Mandatory parameters are missing");
                        break;
                    default:
                        if (!val) { return true; } else { throw new Error("Parameter NOT required"); }
                }
                return true;
            })
        ];
    }

    static async show() {
        try {
            const questions = await Question.findAll();
            if (questions) {
                return questions;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async create(data) {
        try {
            const { exam_id, type_question_id, code, content, minimum, tope, length, help } = data;
            const question = await Question.create({
                exam_id,
                type_question_id,
                code,
                content,
                minimum,
                tope,
                length,
                help
            });
            return question;
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async findById(id) {
        try {
            const questionSearch = await Question.findByPk(id);
            if (questionSearch) {
                return questionSearch;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async delete(id) {
        try {
            const question = await Question.findByPk(id);
            if (question) {
                await question.destroy();
                return question;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async update(data, id) {
        try {
            const { code, question_id, content, isTrue, score } = data;
            const question = await Question.findByPk(id);
            if (question) {
                question.update({
                    code,
                    question_id,
                    content,
                    isTrue,
                    score,
                });
                return question;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async findOneBy(consulta) {
        try {
            const questionExiste = await Question.findOne(consulta);
            if (questionExiste) {
                return questionExiste;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    /**
     * Verify that the question does not exist in the exam before adding
     * @param {object} question  to add
     * @returns {Promise} resolve, when the question does not exist in the exam
     * @returns {Promise} reject, when the question exists in the exam
     */
    static findExists(question) {
        return QuestionService.findOneBy({ where: { exam_id: question.exam_id, content: question.content } })
            .then((data) => {
                if (data) {
                    const err = { error: "The Question already exists" };
                    err.data = data;
                    return Promise.reject(err);
                } else {
                    return Promise.resolve("There is no Question");
                }
            })
            .catch((err) => Promise.reject(err));
    }

    /**
     * Valida los parametros del post para guardar la question, comprueba que los paratros no sean nulos y 
     * los verifica segun el tipo de pregunta
     * @param {object} question datos del post
     * @returns {Promise.resolve} message, cuando los parametros son correctos
     * @returns {Promise.reject} message, cuando algunos de los parametros faltan validateParameters
     */
    static validateParameters(question) {
        return new Promise((resolve, reject) => {
            if (!question.exam_id || !question.type_question_id || !question.code || !question.content) {
                reject("Required parameters are missing");
            } else {
                switch (question.type_question_id) {
                    case typeQuestion.QUESTIONABIERTA:
                        if (!question.length || question.length == 0) {
                            console.log("Required parameters are missing");
                            reject("Required parameters are missing");
                        } else {
                            resolve("Correct parameters");
                        }
                        break;
                    case typeQuestion.QUESTIONNUMERICA:
                        if (!question.minimum || !question.top || question.minimum == 0 || question.top == 0) {
                            reject("Required parameters are missing: minimum or top");
                        } else {
                            resolve("Correct parameters");
                        }
                        break;
                    default:
                        resolve("Correct parameters");
                }
            }
        });
    }
}
module.exports = QuestionService;