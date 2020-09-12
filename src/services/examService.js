const Exam = require("../models/exam");
const { check } = require("express-validator");
const models = require("../../config/db/mysql");

let sequelize;
sequelize = models.sequelize;

class ExamService {

    static validate() {
        return [
            check("module_id", "module_id is required").not().isEmpty().isAlphanumeric().isLength({ min: 1, max: 15 }),
            check("name_exam", "name_exam is required").not().isEmpty().isLength({ min: 2, max: 500 }),
        ];
    }

    static async show() {
        try {
            const hereExam = await Exam.findAll();
            if (hereExam) {
                return hereExam;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async create(data) {
        try {
            const { module_id, type, name_exam } = data;
            const hereExam = await Exam.create({
                module_id,
                type,
                name_exam
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
            } else {
                return "Don't exists id";
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async delete(id) {
        // si un estudiante no hizo el examen se borra.. el profesor puede borrar con alumnos borrado logico
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

    static async update(data, id) {
        try {
            const { module_id, type, name_exam } = data;
            const hereExam = await Exam.findByPk(id);
            if (hereExam) {
                hereExam.update({
                    module_id,
                    type,
                    name_exam
                });
                return hereExam;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static async findOneBy(consulta) {
        try {
            const hereExam = await Exam.findOne(consulta);
            if (hereExam) {
                return hereExam;
            }
        } catch (err) {
            return new Error("An error has ocurred");
        }
    }

    static findAllById(id) {
        let query = `
	            SELECT *
                FROM exams e
                inner join questions as q on q.exam_id = e.id
                INNER JOIN answers AS a ON a.question_id = q.id
                where e.id =:id;`;
        return sequelize.query(query, { replacements: { id: id }, type: sequelize.QueryTypes.SELECT });
    }

    /**
     * Search record if it exists in the database
     * @param {object} exam containing info about a post
     * @returns {Promise}  message error if it exists
     */
    static findExist(exam) {
        return Exam.findOne({ where: { module_id: exam.module_id, name_exam: exam.name_exam } })
            .then((data) => {
                if (data) {
                    const err = "The record exists";
                    return Promise.reject(err);
                } else {
                    return Promise.resolve({ message: "The record does not exist" });
                }
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }

}
module.exports = ExamService;