const Answer = require("../models/answer");
const ExamService = require("./examService");
const QuestionService = require("./questionService");
const { check } = require("express-validator");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class AnswerService {

    static validate() {
        return [
            check("code", "code is required").notEmpty().isLength({ min: 2, max: 15 }).withMessage("Allowable range 2-15"),
            check("questionId", "questionId is required").notEmpty().isNumeric(),
            check("isTrue", "isTrue is required").notEmpty().isIn([1, 0]),
            check("score", "score is required").custom((val, { req }) => {
                if (!val && req.body.isTrue == 1) {
                    throw new Error("Score is required");
                } else if (!val && req.body.isTrue == 0) {
                    return true;
                } else if (val && req.body.isTrue == 0) {
                    throw new Error("Score not required, because isTrue = false");
                } else if (val && req.body.isTrue == 1 && (val < 0 || val > 100)) {
                    throw new Error("Allowable range 0-100");
                } else {
                    let chain = val.toString();
                    let expression = /[0-9]{3}|[0-9]{2}/gi;
                    let found = chain.match(expression);
                    if (found && found.length == 1 && (chain.length > 1 && chain.length < 4)) {
                        return true;
                    } else {
                        throw new Error("Only numbers allowed");
                    }
                }
            })
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
            const { code, questionId, content, isTrue, score } = data;
            const answerCreated = await Answer.create({
                code,
                questionId,
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

    static async findOneBy(query) {
        try {
            const answerExists = await Answer.findOne(query);
            if (answerExists) {
                return answerExists;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async finAllBy(query) {
        try {
            const allAnswer = await Answer.findAll(query);
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

    static async findExam(idAnswer, questionId) {
        let respuesta = {};
        return Answer.findByPk(idAnswer)
            .then(data => {
                if (data) {
                    respuesta.answer = data;
                    return QuestionService.findById(questionId);
                }
                return Promise.reject("No existe answer")
            })
            .then(data => {
                if (data) {
                    respuesta.question = data;
                    return ExamService.findById(data.examId);
                }
                return Promise.reject("No existe question")
            })
            .then(data => {
                if (data && data.publisheAt === null) {
                    respuesta.exam = data;
                    return Promise.resolve(respuesta);
                }
                return Promise.reject("No existe exam o esta close")
            })
            .catch(err => Promise.reject(err))
    }

    // questionId can be not changed
    static async updateNormal(data, id) {
        try {
            const { code, content, isTrue, score } = data;
            const foundAnswer = await Answer.findByPk(id);
            if (foundAnswer) {
                foundAnswer.update({
                    code,
                    content: content || null,
                    isTrue,
                    score: score || 0,
                });
                return foundAnswer;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async updateRestricted(data, id) {
        try {
            const { code, questionId, content, isTrue, score } = data;
            const foundAnswer = await Answer.findByPk(id);
            if (foundAnswer) {
                foundAnswer.update({
                    code,
                    questionId,
                    content: content || null,
                    isTrue,
                    score: score || 0,
                });
                return foundAnswer;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    /**
     * Verification of consistency of the data to add
     * @param {Object} answer post data to add
     * @returns {Promise.resolve} message for correct data
     * @returns {Promise.reject} alert message, if data is missing
     */
    static validateParameters(answer) {
        return new Promise((resolve, reject) => {
            if (answer.typeQuestionId == typeQuestion.OPENQUESTION && answer.content) {
                reject("CONTENT parameter is not necessary for open questions");
            } else if (answer.typeQuestionId != typeQuestion.OPENQUESTION && !answer.content) {
                reject("Parameter content is mandatory");
            } else return resolve(1);
        });
    }
}
module.exports = AnswerService;