const ExamService = require("../services/examService");

class ExamController {

    static getExamComplet(req, res) {
        return ExamService.findAllById(req.params.id)
            .then((data) => {
                if (data && data.length > 0) {
                    return res.status(200).json({ message: "Query executed correctly", data });
                } else {
                    return res.status(404).json({ err: "Exam not found" });
                }
            })
            .catch((err) => res.status(500).json({ err }));
    }

    static getAll(req, res) {
        return ExamService.show()
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
            moduleId: req.body.moduleId,
            type: req.body.type,
            name: req.body.name
        };
        return ExamService.exists(exam)
            .then(data => ExamService.create(exam))
            .then(examCreate => {
                if (examCreate) {
                    return res.status(200).json({ message: "Create successfully", data: examCreate });
                }
                return res.status(404).json({ err: "Registry creation error" });
            })
            .catch((err) => res.status(500).json({ err }));
    }

    static async updateNormal(req, res) {
        try {
            const { id } = req.params;
            const exam = await ExamService.updateNormal(req.body, id);
            if (exam) {
                return res.status(200).json({ message: "Sucessfull Ejecution", data: exam });
            } else return res.status(404).json({ err: "Exam not found" });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    static async close(req, res) {
        try {
            const { id } = req.params;
            const parametros = { publishedAt: new Date() };
            const exam = await ExamService.updateRestringuido(parametros, id);
            if (exam) {
                return res.status(200).json({ message: "Sucessfull Ejecution", data: exam });
            } else return res.status(404).json({ err: "Exam not found" });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const exam = await ExamService.deleteNormal(id);
            return res.status(200).json({ message: "Delete Sucessfull", data: exam });
        } catch (err) {
            return res.status(500).json({ err });
        }
    }

}
module.exports = ExamController;