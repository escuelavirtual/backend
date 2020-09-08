const e = require("debug")("error:data");
const log = require("debug")("test:log");
const UserService = require('../services/userService');
const StudentService = require('../services/studentService');


class StudentsController {
    
    static async create(req, res) {
        
        try {
            
            const user = await UserService.createUser(req.body);
            const student = await StudentService.createStudent(user.id);
            return res.status(201).json({
                message: 'the student has been created',
                data: {
                    id: student.id,
                    userId: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    createdAt: user.createdAt
                }
            });
        } catch (err) {
            e(err.message);
            return res.status(400).json({ message: err.message })
        }
    }

    static async show(req, res){

        const student = await StudentService.get(req.params.id);
        
        log(student);        
        return res.json(student);
    }
}

module.exports = StudentsController;
