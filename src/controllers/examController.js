const ExamService = require("../services/examService");

class examController {

    static getExamComplet(req, res) {
        return ExamService.findAllById(req.params.id)
            .then((data) => {
                if (data.length > 0) {
                    return res.status(200).json({ message: "Query executed correctly", data });
                } else {
                    return res.status(404).json({ err: "Exam not found" });
                }
            })
            .catch((err) => res.status(500).json({ err }));
    }

    static getExam(req, res) {
        return ExamService.findById(req.body.id)
            .then((data) => {
                if (data) {
                    return res.status(200).json({ message: "Query executed correctly", data });
                } else {
                    return res.status(404).json({ err: "Exam not found" });
                }
            })
            .catch((err) => res.status(500).json({ err }));
    }

    static createExam(req, res) {
        const exam = {
            module_id: req.body.module_id,
            type: req.body.type,
            name_exam: req.body.name_exam
        };
        return ExamService.findExists(exam)
            .then(data => ExamService.create(exam))
            .then((data) => res.status(200).json({ message: "Create successfully", data }))
            .catch((err) => res.status(500).json({ err }));
    }

}
module.exports = examController;