const CourseService = require("../services/courseService");

class CourseController {
  static async createCourses(req, res) {
    try {
      const coursecreate = await CourseService.createCourses(req.body);
      if (coursecreate) {
        return res.status(200).json({
            message:"The course has been created",
            data:coursecreate
        });
      }
    } catch (err) {
      res.status(500).json({ message: "an error has ocurred" });
    }
  }

  static async updateCourses(req, res) {
    try {
      const { id } = req.params;
    const courseupdate = await CourseService.updateCourses(req.body, id);
      if(courseupdate){
        return res.status(200).json({
            ok: true,
            message: "Update Sucessfull",
            courseupdate,
          });
      }
    } catch (err) {
      res.status(500).json({ message: "an error has ocurred" });
    }
  }

  static async searchCourse(req, res) {
    try {
      const allcourses = await CourseService.allCourses();
      return res.status(200).json({
        ok: true,
        message: "query executed correctly",
        allcourses,
      });
    } catch (err) {
       return res.status(500).json({ message: "an error has ocurred" });
    }
  }
  static async deleteCouse(req,res){
      try{
          const {id} = req.params
            const coursesdelete = await CourseService.deleteCourse(id);
            return res.status(200).json({message:"Delete Sucessfull",data:coursesdelete})
          
      }catch(err){
        return res.status(500).json({ message: "an error has ocurred" });
      }
  }

}
module.exports = CourseController;
