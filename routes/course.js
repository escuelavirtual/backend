const express=require('express');
const router=express.Router();
const Course=require('../sequelize/models/course');

router.post('/',async (req,res)=>
{
    const course= await Course.create({
        code:req.body.code,
        title:req.body.title,
        description:req.body.description,
        category:req.body.category,
        id_professor:req.body.id_professor
    });

    res.json(course);
})



module.exports=router;