const e = require("debug")("error:data")
const { check } = require("express-validator"); //library for validation user data
const UserService = require('../services/userService');
const StudentService = require('../services/studentService');


class StudentsController {
    
    static async create(req, res) {
        try {
            
            const user = await UserService.CreateUser(req.body,res);
            const student = await StudentService.createStudent(user.id);
            return res.status(201).json({
                message: 'Student has created',
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
            return res.status(500).json({ message: err.message })
        }
    }


    static getStudent(req, res){

        const data = {
            id: req.params.id,
            firstname: "Alejandro",
            lastname: "Cayssials",
            email: "demo@escuela.com",
            userId: 4,
            createdAt: Date.now() 
           };
        console.log(data);
        
        res.json(data);
    }
}

module.exports = StudentsController;
