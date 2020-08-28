const bcrypt=require('bcrypt');
const Professor=require('../sequelize/models/professor');
const User=require('../sequelize/models/user');

exports.getProfessors = async(req,res)=>{
    res.json({
        ok:true
    });
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
        password:bcrypt.hashSync(req.body.password,10)
        });
        const id=user.id;
        const professor=await Professor.create({
           id_user:id,
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