const bcrypt = require('bcrypt');
const Professor = require('../models/professor');
const User = require('../models/user');

exports.getProfessors = async(req,res)=>{
    try{
        const professor=await Professor.findAll();
        res.status(200).json({
            ok:true,
            professor
        });

    }catch(error){
        res.status(500).json({
            ok:false,
            message:'We couldn´t find the professors'
        })
    }
    
}

exports.createProfessor=async(req,res)=>{
    try{
        if(req.body.email==null||req.body.password==null||req.body.firstname==null||req.body.lastname==null){
            return res.status(400).json({
                ok:false,
                message:'Bad request'
            })
        }
        const user=await User.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        profile_image:req.body.profile_image,
        password:bcrypt.hashSync(req.body.password,10)
        });
        const id=user.id;
        const professor=await Professor.create({
           userId:id,
           valuation:req.body.valuation
        });
         
        res.status(201).json({
            ok:true,
            message:'User created with professsor rol',
            user,
            professor
        })
    }catch(error){
       
        res.status(500).json({
            ok:false,
            message:'Internal error'
        })
    }
    

}