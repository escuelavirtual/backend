const LOG = require("debug")("error:data");
const Enrollment = require('../models/enrollment');

class EnrollmentController {


    static async enrollStudentInACourse(req, res, next) {
        LOG(`StudentId: ${req.query.studentId}`);
        LOG(`courseId: ${req.query.courseId}`);
        const studentId = req.query.studentId;
        const courseId = req.query.courseId;
        
        try {
            const enrollment = await Enrollment.create({
                studentId,
                courseId,
                calification: 85
            });           
            return res.status(201).json({
                ok: true,
                message: `You have enrolled to course with id ${courseId}`,
            });
        }catch(err) {
            e(err);
            return res.status(400).json({
                ok: false,
                message: `Something wrong happen enrolling in a course`,
                err
            });
        }
        
    }
}

module.exports = EnrollmentController;