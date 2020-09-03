const e = require("debug")("error:data")
const bcrypt = require('bcrypt');
const Professor = require('../models/professor');
const User = require('../models/user');

exports.getProfessors = async (req, res) => {
    try {
        const professor = await Professor.findAll();
        res.status(200).json({    
            professors: professor
        });

    } catch (error) {
        res.status(500).json({
           
            message: 'We couldn´t find the professors'
        })
    }

}

exports.createProfessor = async (req, res) => {
    try {
        if (req.body.email == null || req.body.password == null || req.body.firstname == null || req.body.lastname == null) {
            return res.status(400).json({ message: 'Bad request' })
        }

        const user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });

        const professor = await Professor.create({
            userId: user.id
        });

        res.status(201).json({
            message: 'Professor was created',
            data: {
                id: professor.id,
                userId: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                createdAt: user.createdAt,
            }
        })
    } catch (err) {

        e(err.message);
        res.status(500).json({ message: err.message })
        
    }


}