const Answer = require("../models/answer");
const ExamService = require("./examService");
const QuestionService = require("./questionService");
const { check } = require("express-validator");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class AnswerService {

    static validate() {
        return [
            check("code", "code is required").not().isEmpty().isLength({ min: 2, max: 15 }).withMessage("Allowable range 2-15"),
            check("questionId", "questionId is required").not().isEmpty().isNumeric(),
            check("isTrue", "isTrue is required").not().isEmpty().isIn([1, 0]),
            check("score", "score is required").custom((val, { req }) => {
                if (!val && req.body.isTrue == 1) {
                    throw new Error("Score is required");
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

    static async findExam(query) {
        try {
            const data = await QuestionService.findOneBy({ where: { id: query.questionId } });
            if (data) {
                const answerExists = await ExamService.findOneBy({ where: { id: data.examId } });
                return answerExists;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async update(data, id) {
        try {
            const { code, questionId, content, isTrue, score } = data;
            const foundAnswer = await Answer.findByPk(id);
            if (foundAnswer) {
                foundAnswer.update({
                    code,
                    questionId,
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

    /**
     * Verification of data to add
     * @param {Object} answer post data to add
     * @returns {Promise.resolve} message for correct data
     * @returns {Promise.reject} alert message, if data is missing
     */
    static validateParameters(answer) {
        return new Promise((resolve, reject) => {
            if (answer.typeQuestionId == typeQuestion.OPENQUESTION && answer.content) {
                reject("Parameter CONTENT no required ");
            } else if (answer.typeQuestionId != typeQuestion.OPENQUESTION && !answer.content) {
                reject("Mandatory parameters are missing");
            } else return resolve(1);
        });
    }
}
module.exports = AnswerService;