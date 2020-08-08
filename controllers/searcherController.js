const Course = require('../models/course')
const {validationResult} = require('express-validator')

//searcher course
exports.searcher = async (req, res) => {
    const errors = validationResult(req);
    if(!errors){
        res.status(400).json({errors : errors.array()});
    }

    try{

        const {title} = req.body;

        if(!title){
            return res.status(404).json({msg:"there is no course with the title supplied"});
        }

        const courses = await Course.findAll({
            where: {
                title: title,
                isPrivate: false
            }
        })

        res.json(courses);


    }catch(error){
        console.log(error);
        res.status(500).json({msg:error});
    }
}