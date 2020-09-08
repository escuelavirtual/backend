const Professor = require("../models/professor");
const e = require("debug")("error:data");

class ProfessorService {
  static async createProfessor(id) {
    try {
        console.log("create professor..")
      const professor = await Professor.create({
        userId: id,
      });
      return professor;
    } catch (err) {
      e.log(err);
      return new Error("An error has ocurred");
    }
  }
  static async getAllProfesor() {
    const professor = await Professor.findAll();
    if (professor) {
      return professor;
    }
  }
}
module.exports = ProfessorService;
