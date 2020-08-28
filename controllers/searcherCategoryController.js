const Course = require("../sequelize/models/course");
const { validationResult } = require("express-validator");

//Searcher course with category
exports.searcher = async (req, res) => {
    const errors = validationResult(req);
    if(!errors){
        res.status(500).json({errors : errors.array()});
    }

    try{
        const summary = req.params.category;

        if(!summary){
            return res.status(400).send("Don´t have a category");
        }

        const course = Course.findAll({
            where: {
                summary,
                isPrivate: false
            }
        });

        res.json(course);
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error});
    }
};
