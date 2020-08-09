const Course = require('../models/course')
const {validationResult} = require('express-validator')

//searcher course
exports.searcher = async (req, res) => {
    const errors = validationResult(req);
    if(!errors){
        res.status(400).json({errors : errors.array()});
    }

    try{

        const {info} = req.body;

        if(!info){
            return res.status(404).json({msg:"there is no course with the title supplied"});
        }

        const coursesTitle = await Course.findAll({
            where: {
                title: info,
                isPrivate: false
            }
        })

        if(coursesTitle){
            res.json(coursesTitle);
        }

        const coursesSummary = await Course.findAll({
            where: {
                summary: info,
                isPrivate: false 
            }
        })

        if(coursesSummary){
            res.json(coursesSummary);
        } 

        const coursesOtherThings = await Course.findAll({
            where: {
                description: info,
                code: info,
                isPrivate: false
            }
        })

        if(coursesOtherThings){
            res.json(coursesOtherThings);
        }

        res.status(404).send({msg: "Don´t find courses"})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error});
    }
}