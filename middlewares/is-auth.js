//require("dotenv").config();
const jwt = require("jsonwebtoken");


exports.verifyToken=(req,res,next)=>{
  
  let query = req.header('authorization').split(' ');
  
  let token = query[1]; //Authenticate
  
  jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
    //decoded is the payload
    if(error){
      return res.status(500).json({
        ok:false,
        error
      });
    }
    req.user = decoded.user;  
  });
  next();
}