const CourseService = require("../services/courseService");
const Course = require("../models/course");

class CourseController {
  //good
  static async createCourses(req, res) {
    try {
      const CreateCourses = await CourseService.CreateCourse(req.body);
      if (CreateCourses) {
        return res.status(200).json({
            message: "the course has been created",
            data: CreateCourses
        });
      }
    } catch (err) {
      res.status(500).json({ message: "an error has ocurred" });
    }
  }


  //falta verificar updat ecourses
  static async updateCourses(req, res) {
    try {
      const { id } = req.params;
    const courseUpdate = await CourseService.UpdateCourse(req.body, id);
      if(courseUpdate){
        return res.status(200).json({
            ok: true,
            message: "Update Sucessfull",
            courseUpdate,
          });
      }
    } catch (err) {
      res.status(500).json({ message: "an error has ocurred" });
    }
  }

  static async searchCourse(req, res) {
    try {
      const allCourses = await CourseService.AllCourses();
      return res.status(200).json({
        ok: true,
        message: "query executed correctly",
        allCourses,
      });
    } catch (err) {
       return res.status(500).json({ message: "an error has ocurred" });
    }
  }
  static async deleteCouse(req,res){
      try{
          const {id} = req.params
            const courseDelete = await CourseService.DeleteCourse(id);
            return res.status(200).json({message:"Delete Sucessfull",data:courseDelete})
          
      }catch(err){
        return res.status(500).json({ message: "an error has ocurred" });
      }
  }

}
module.exports = CourseController;
