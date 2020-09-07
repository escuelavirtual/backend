const Course = require('../models/course');
const { nanoid } = require('nanoid');
const courseCtrl = {};


courseCtrl.createCourse = async (req, res) => {
    const newCode = nanoid(10);
    const { title, 
        description, 
        isPrivate,
        categoryId,
        professorId } = req.body;
    try {
        const newCourse = await Course.create({
            invitationCode:newCode, 
            title: title, 
            description: description,              
            isPrivate: isPrivate,         
            categoryId: categoryId,  
            professorId: professorId
        })
        
        res.status(201).json({ message: 'the course has been created', data: newCourse });
        
    } catch(error) {
            console.log(error);
            res.status(500).json({message:'an error has ocurred'})
    }


}

courseCtrl.deleteCourse = async (req,res) => {
    let courseId=req.params.id;
    const courseToDelete= await Course.findByPk(courseId);
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
    let courseId = req.params.id;
    const courseUpdate = await Course.findByPk(courseId);
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
                    categoryId:req.body.categoryId
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