//require("dotenv").config();
const jwt = require("jsonwebtoken");


exports.verifyToken=(req,res,next)=>{
  let token=req.get('token');//Authenticate
  jwt.verify(token,process.env.JWT_SECRET,(error,decoded)=>{
    //decoded is the payload
    if(error){
      return res.status(401).json({
        ok:false,
        error
      });
    }
    req.user=decoded.user;  
  });
  next();
}