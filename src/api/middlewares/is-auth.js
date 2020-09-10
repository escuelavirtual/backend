//require("dotenv").config();
const jwt = require("jsonwebtoken");
const Professor=require("../../models/professor");

exports.verifyToken=(req,res,next)=>{
  
  let query = req.get('authorization');
  
  let token = query; //Authenticate
  
  jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
    //decoded is the payload
    if(error){
      return res.status(500).json({
        ok:false,
        error
      });
    }
    req.id = decoded.id;  
  });
  next();
}

exports.verifyProfesssor = async (req,res,next) => {
  let id=req.id;
  const professor= await Professor.findAll({
    where:{
      userId:id
    }
  });
  console.log(professor);
  if(professor!=null){
    next();
  }else{
    return res.status(500).json({
      ok:false,
      error:'El usuario no es profesor'
    });
  }
}
