const e = require("debug")("error:data")
const bcrypt = require('bcrypt');
const Student = require('../models/student');
const User = require('../models/user');

class StudentsController {
    constructor(req, res){
        this.req = req;
        this.res = res;
    }

    static async create(req, res) {

        const data = req.body;
        try {
            if (!data.email || !data.password || !data.firstname || !data.lastname) {
                return res.status(400).json({ message: 'Bad request' })
            }
    
            const user = await User.create({
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: bcrypt.hashSync(data.password, 10)
            });
    
            const student = await Student.create({
                userId: user.id
            });
    
            res.status(201).json({
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
            res.status(500).json({ message: err.message })
            
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