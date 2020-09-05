const Student=require('../models/student');
var e = require('debug')("error:data");
class StudentService {
    constructor(req, res){
        this.req = req;
        this.res = res;
    }
    static async createStudent(id){
        try{
            const student = await Student.create({
                    userId:id
            });
            return student;
        }catch(err){
            e.log(err);
            return res.status(500).json({message:'Problem register Student'});
        }
        
    }
}
module.exports=StudentService;