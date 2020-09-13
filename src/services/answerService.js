const Answer = require("../models/answer");
const { check } = require("express-validator");
const typeQuestion = require("../../config/enum/typeOfQuestion");

class AnswerService {

    static validate() {
        return [
            check("code", "code is required").not().isEmpty().isAlphanumeric().isLength({ min: 2, max: 15 }),
            check("question_id", "question_id is required").not().isEmpty().isNumeric(),
            check("isTrue", "isTrue is required").not().isEmpty().isIn([1, 0]),
            check("score", "score is required").optional().isNumeric(),
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

    /**
     * Verification of data to add
     * @param {Object} answer post data to add
     * @returns {Promise.resolve} message for correct data
     * @returns {Promise.reject} alert message, if data is missing
     */
    static validateParameters(answer) {
        return new Promise((resolve, reject) => {
            console.log("question", answer.type_question_id);
            switch (answer.type_question_id) {
                case typeQuestion.QUESTIONABIERTA:
                    if (!answer.code || !answer.score) {
                        reject("Mandatory parameters are missing");
                    } else {
                        resolve("Correct parameters");
                    }
                    break;
                default:
                    if (!answer.code || !answer.content || !answer.score) {
                        reject("Mandatory parameters are missing");
                    } else {
                        resolve("Correct parameters");
                    }
                    break;
            }
        });
    }
}
module.exports = AnswerService;