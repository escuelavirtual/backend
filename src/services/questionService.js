/* eslint-disable indent */
const Question = require("../models/question");
const { check } = require("express-validator");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class QuestionService {

    static validate() {

        return [
            check("examId", "examId is required").not().isEmpty(),
            check("typeQuestionId", "typeQuestionId is required").not().isEmpty().isNumeric().custom((val, { req }) => {
                if (!val || val < 0 || val > parseInt(typeQuestion.NUMERICALQUESTION, 10) + 1) {
                    throw new Error("Mandatory parameters are missing or out of range");
                } else return true;
            }),
            check("code", "code is required").not().isEmpty().isLength({ min: 2, max: 15 }),
            check("content", "content is required").not().isEmpty().isLength({ min: 2, max: 500 }),
            check("help", "help is optional").optional().isLength({ min: 2, max: 500 }),
            check("minimum").custom((minimum, { req }) => {
                if (!req.body.typeQuestionId || req.body.typeQuestionId < 1 || req.body.typeQuestionId > parseInt(typeQuestion.NUMERICALQUESTION, 10) + 1) return true;
                switch (req.body.typeQuestionId) {
                    case typeQuestion.OPENQUESTION:
                        if (!minimum || minimum < 1) throw new Error("Mandatory parameters are missing");
                        break;
                    case typeQuestion.NUMERICALQUESTION:
                        if (!minimum || minimum === 0) throw new Error("Mandatory parameters are missing");
                        break;
                    default:
                        if (!minimum) return true;
                        else throw new Error("Parameter NOT required");
                }
                return true;
            }),
            check("tope").custom((val, { req }) => {
                if (!req.body.typeQuestionId || req.body.typeQuestionId < 1 || req.body.typeQuestionId > parseInt(typeQuestion.NUMERICALQUESTION, 10) + 1) return true;
                if (req.body.typeQuestionId == typeQuestion.NUMERICALQUESTION && (!val || val === 0)) {
                    throw new Error("Mandatory parameters are missing");
                } else if (req.body.typeQuestionId != typeQuestion.NUMERICALQUESTION && !val) {
                    return true;
                } else if (req.body.typeQuestionId != typeQuestion.NUMERICALQUESTION && val) {
                    throw new Error("Parameter NOT required");
                }
            }),
            check("length").custom((val, { req }) => {
                if (!req.body.typeQuestionId || req.body.typeQuestionId < 1 || req.body.typeQuestionId > parseInt(typeQuestion.NUMERICALQUESTION, 10) + 1) return true;
                if (req.body.typeQuestionId == typeQuestion.OPENQUESTION && (!val || val < 1 || val > 500)) {
                    throw new Error("Mandatory parameters are missing");
                } else if (req.body.typeQuestionId != typeQuestion.OPENQUESTION && !val) {
                    return true;
                } else if (req.body.typeQuestionId != typeQuestion.OPENQUESTION && val) {
                    throw new Error("Parameter NOT required");
                }
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
            const { examId, typeQuestionId, code, content, minimum, tope, length, help } = data;
            const question = await Question.create({
                examId,
                typeQuestionId,
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
            const { code, questionId, content, isTrue, score } = data;
            const question = await Question.findByPk(id);
            if (question) {
                question.update({
                    code,
                    questionId,
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

    static async findOneBy(query) {
        try {
            const questionExists = await Question.findOne(query);
            if (questionExists) {
                return questionExists;
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
        return QuestionService.findOneBy({ where: { examId: question.examId, content: question.content } })
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
     * Validate the parameters of the post, check that they are not null according to the type of question
     * @param {object} question post data
     * @returns {Promise.resolve} message, when the parameters are correct
     * @returns {Promise.reject} message,  when some of the parameters are missing
     */
    static validateParameters(question) {
        return new Promise((resolve, reject) => {
            if (!question.examId || !question.typeQuestionId || !question.code || !question.content) {
                reject("Required parameters are missing");
            } else {
                switch (question.typeQuestionId) {
                    case typeQuestion.OPENQUESTION:
                        if (!question.length || question.length == 0) {
                            console.log("Required parameters are missing");
                            reject("Required parameters are missing");
                        } else {
                            resolve("Correct parameters");
                        }
                        break;
                    case typeQuestion.NUMERICALQUESTION:
                        if (!question.minimum || !question.tope || question.minimum == 0 || question.tope == 0) {
                            reject("Required parameters are missing: minimum or tope");
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