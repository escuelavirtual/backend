const Course = require('../sequelize/models/course');
const {nanoid}=require('nanoid');
const courseCtrl = {};


courseCtrl.createCourse = async (req, res) => {
    const newCodigo = nanoid(10);
    const { title, 
        description, 
        start_date, 
        finish_date, 
        requirements, 
        isPrivate, 
        rating, 
        category } = req.body;
    try {
        const newCourse = await Course.create({
            code:newCodigo, 
            title, 
            description, 
            start_date, 
            finish_date, 
            requirements, 
            isPrivate, 
            rating, 
            category,  
            id_professor:1
        },{
            fields:['code','title','description','start_date','finish_date','requirements','isPrivate', 'rating','category','createdAt','updatedAt','id_professor']
        });
        if (newCourse) {
            res.json({ message: 'course create successfully', data: newCourse });
        }
    } catch(error) {
            console.log(error);
            res.status(500).json({message:'Error-No se almaceno en la BD MySql'})
    }


}
module.exports = courseCtrl;