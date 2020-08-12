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
        category,
        id_professor } = req.body;
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
            id_professor
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

courseCtrl.deleteCourse = async (req,res) => {
    let id_course=req.params.id;
    const courseToDelete= await Course.findByPk(id_course);
    try{
        if(courseToDelete){
            res.json(
                {
                    ok:true,
                    message:'The sourse has been succesfully finded and it will be deleted',
                    courseToDelete
                });
        await courseToDelete.destroy();      
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:'The course doesn´t exist'});
    }
}

module.exports = courseCtrl;