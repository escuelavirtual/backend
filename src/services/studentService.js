const Student = require('../models/student');
const User = require('../models/user');
const e = require('debug')("error:data");

class StudentService {

    static async createStudent(data) {
        try {
            const user = await User.create(data);
            const student = await Student.create({
                userId: user.id
            });

            return {id:student.id,
                    userId:student.userId,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    email:user.email,
                    createdAt:user.createdAt
                };

        } catch (err) {

            e(err);
            return new Error(err);
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