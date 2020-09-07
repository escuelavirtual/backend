const Student = require('../models/professor');
const e = require('debug')("error:data");

class ProfessorService {

    static async createProfessor(id) {
        try {
            const professor = await Professor.create({
                userId: id
            });

            return professor;

        } catch (err) {

            e.log(err);
            return new Error('An error has ocurred');
        }

    }
}
module.exports = ProfessorService;