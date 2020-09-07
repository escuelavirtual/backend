const Student = require('../models/student');
const User = require('../models/user');
const e = require('debug')("error:data");

class StudentService {

    static async createStudent(id) {
        try {
            const student = await Student.create({
                userId: id
            });

            return student;

        } catch (err) {

            e(err);
            return new Error('An error has ocurred');
        }

    }

    static async get(id) {
        try {
            
            const student = await Student.findByPk(id);
            
            const user = await User.findByPk(student.userId);

            e(student);

            return {
                id: student.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                userId: student.userId,
                createdAt: student.createdAt 
               };

        } catch (err) {

            e(err);
            return new Error('An error has ocurred');
        }

    }
}
module.exports = StudentService;