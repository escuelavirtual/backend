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
            res.status(201).json({ message: 'course create successfully', data: newCourse });
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

courseCtrl.updateCourse= async (req,res) => {
    let updateID=req.params.id;
    const courseUpdate=await Course.findByPk(updateID);
    //let title=req.body.title;
    try {
        if(courseUpdate){
            courseUpdate.update(
                {
                    title:req.body.title,
                    description:req.body.description,
                    start_date:req.body.start_date,
                    finish_date:req.body.finish_date,
                    isPrivate:req.body.isPrivate,
                    status:req.body.status,
                    category:req.body.category
                });
            res.json(
                {
                ok:true,
                message:'Test update',
                courseUpdate  
                });
        }
        
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({message:'Failed update course'});
    }
}

//this method has the duty of seek all the courses, to be used in postman
courseCtrl.searchCourse = async (req,res)=> {
    const allCourses=await Course.findAll();
    try{
        if(allCourses){
            res.json(
                {
                    ok:true,
                    message:'query executed correctly',
                    allCourses
                });
        }
    }catch(error){
        res.status(500).json(
            {
                ok:false,
                error
            })
    }
}
module.exports = courseCtrl;