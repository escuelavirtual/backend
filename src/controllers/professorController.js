const e = require("debug")("error:data");
const ProfessorService = require("../services/professorService");
const UserService = require("../services/userService");

class ProfessorController {
  static async getProfessors(req, res) {
    try {
      const professor = await ProfessorService.getAllProfesor();
      return res.status(200).json({ professors: professor });
    } catch (err) {
      res.status(500).json({
        message: "We couldn´t find the professors",
      });
    }
  }
  static async createProfessor(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      const professor = await ProfessorService.createProfessor(user.id);
      return res.status(201).json({
        message: "the student has been created",
        data: {
          id: professor.id,
          userId: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          createdAt: user.createdAt,
        },
      });
    } catch (err) {
        e(err.message);
      res.status(500).json({
        message: "Problem create professor",
      });
    }
  }
}
module.exports = ProfessorController;


