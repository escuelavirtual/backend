const Exam = require("../models/exam");
const { check } = require("express-validator");

const Question = require("../models/question");
const Answer = require("../models/answer");
const Type_question = require("../models/type_question");

require("../models/associations");
class ExamService {

    static validate() {
        return [
            check("moduleId", "moduleId is required").notEmpty().isNumeric().isLength({ min: 1, max: 15 }),
            check("name", "name is required").notEmpty().isLength({ min: 2, max: 500 }),
        ];
    }

    static async show() {
        try {
            const hereExam = await Exam.findAll();
            if (hereExam) {
                return hereExam;
            }
            return Promise.reject("Not exists Exam");
        } catch (err) {
            return Promise.reject("An error has ocurred");
        }
    }

    static async create(data) {
        try {
            const { moduleId, type, name } = data;
            const hereExam = await Exam.create({
                moduleId,
                type,
                name
            });
            return hereExam;
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async findById(id) {
        try {
            const hereExam = await Exam.findByPk(id);
            if (hereExam) {
                return hereExam;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async delete(id) {
        // the teacher can delete an exam with enrolled students 
        try {
            const hereExam = await Exam.findByPk(id);
            if (hereExam) {
                await hereExam.destroy();
                return hereExam;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    /**
     * the exam is logically deleted if it is not published and does not have a related question
     * @param {integer} id identificator of exam
     */
    static deleteNormal(id) {
        return Promise.all([Exam.findByPk(id), Question.findOne({ where: { examId: id } })])
            .then(exam => {
                if (exam[0] && exam[0].publishedAt === null && !exam[1]) {
                    exam[0].destroy();
                    return exam[0];
                }
                return Promise.reject("Exam is running or There is related question");
            })
            .catch(err => Promise.reject(err));
    }

    static updateNormal(data, id) {
        const { moduleId, type, name } = data;
        return Exam.findByPk(id)
            .then(hereExam => {
                if (hereExam && hereExam.publishedAt === null) {
                    return hereExam.update({
                        moduleId,
                        type,
                        name
                    });
                }
                return Promise.reject("Not exists exam");
            })
            .then(data => {
                // console.log("data ", data)
                return Promise.resolve(data);
            })
            .catch(err => Promise.reject(err));
    }

    static async updateRestringuido(data, id) {
        try {
            const { moduleId, type, name, publishedAt } = data;
            const hereExam = await Exam.findByPk(id);
            if (hereExam) {
                hereExam.update({
                    moduleId,
                    type,
                    name,
                    publishedAt
                });
                return hereExam;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async findOneBy(query) {
        try {
            const hereExam = await Exam.findOne(query);
            if (hereExam) {
                return hereExam;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static findAllById(id) {
        let query = {
            include: [{
                model: Question,
                attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                include: [{
                    model: Type_question,
                    attributes: ["content"],
                }, {
                    model: Answer,
                    attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
                }],
            }],
            attributes: { exclude: ["publishedAt", "createdAt", "updatedAt", "deletedAt"] },
            where: { id: id }
        };

        return Exam.findAll(query)
            .then(data => Promise.resolve(data))
            .catch(err => Promise.reject(err));
    }

    /**
     * Search record if it exists in the database
     * @param {object} exam containing info about a post
     * @returns {Promise}  message error if it exists
     */
    static exists(exam) {
        return Exam.findOne({ where: { moduleId: exam.moduleId, name: exam.name } })
            .then(data => {
                if (data) {
                    return Promise.reject("Exists the record the exam");
                }
                return Promise.resolve(1);
            })
            .catch((err) => Promise.reject(err));
    }

}
module.exports = ExamService;