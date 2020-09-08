const { body } = require("express-validator");
const Course = require("../models/course");
const { nanoid } = require("nanoid");

class CourseService {
  static validate() {
    return [
      body("title").isLength({ min: 3 }),
      body("description").isLength({ min: 6 }),
    ];
  }
  static async createCourse(data) {
    try {
      const newCode = nanoid(10);
      const { title, description, isPrivate, categoryId, professorId } = data;
      const postCursos = await Course.create({
        invitationCode: newCode,
        title,
        description,
        isPrivate,
        categoryId,
        professorId,
      });
      return postCursos;
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async updateCourse(data, id) {
    const courseUpdate = await Course.findByPk(id);
    try {
      const {
        title,
        description,
        isPrivate,
        categoryId,
        professorId,
      } = data;
      if (courseUpdate) {
        courseUpdate.update({
          title,description,isPrivate,categoryId,professorId
        });
        return courseUpdate;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }

  static async allCourses() {
    try {
      const curso = await Course.findAll();
      return curso;
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  //delete data ..
  static async deleteCourse (id){
  try{
    const courseDelete = await Course.findByPk(id);
    if(courseDelete){
        await courseDelete.destroy();
        return courseDelete
    
    }
  }catch(err){
        return new Error("An error has ocurred");
  }
  }
}

module.exports = CourseService;
