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
  static async createCourses(data) {
    try {
      const newCode = nanoid(10);
      const { title, description, isPrivate, categoryId, professorId } = data;
      const createcourses = await Course.create({
        invitationCode: newCode,
        title,
        description,
        isPrivate,
        categoryId,
        professorId,
      });
      return createcourses;
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async updateCourses(data, id) {
    const courses = await Course.findByPk(id);
    try {
      const {
        title,
        description,
        isPrivate,
        categoryId,
        professorId,
      } = data;
      if (courses) {
        courses.update({
          title,description,isPrivate,categoryId,professorId
        });
        return courses;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }

  static async allCourses() {
    try {
      const allcourses = await Course.findAll();
      return allcourses;
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async deleteCourse (id){
  try{
    const coursedelete = await Course.findByPk(id);
    if(coursedelete){
        await coursedelete.destroy();
        return coursedelete
    
    }
  }catch(err){
        return new Error("An error has ocurred");
  }
  }
}

module.exports = CourseService;
