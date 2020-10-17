//require("dotenv").config();
const jwt = require("jsonwebtoken");
const Professor = require("../../models/professor");
const Student = require('../../models/student');
const log = require('debug')('is-auth');
const logVerifyToken = log.extend('verifyToken');
const logVerifyStudent = log.extend('verifyStudent');

exports.verifyToken=(req,res,next)=>{
  //The exception thrown by the split method is handled sending a meessage to client
  let token;
  try {
    let query = req.header('authorization').split(' ');
    token = query[1]; //Authenticate
  }catch(err) {
    logVerifyToken(err);
    return res.status(503).json({
      ok: false,
      err
    });
  }  
  jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
    //decoded is the payload
    logVerifyToken(error);
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

exports.verifyStudent = async (req, res, next) => {
  let id=req.id;
  try {
    const student= await Student.findOne({
      where:{
        userId:id
      }
    }); 
    logVerifyStudent(`Student row: ${student}`)
    next();
  } catch(error){
    logVerifyStudent(`Error: ${error}`)
    return res.status(500).json({
      ok:false,
      message: 'User is not a student',
      error
    });
  }
}