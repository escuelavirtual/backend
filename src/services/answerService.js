const Answer = require("../models/answer");

class AnswerService {
  static async findAllAnswer() {
    try {
      const answers = await Answer.findAll();
      if (answers) {
        return answers;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async createAnswer(body) {
    try {
      const { code, question_id, content, isTrue, score } = body;
      const answersCourse = await Answer.create({
        code,
        question_id,
        content,
        isTrue,
        score,
      });
      return answersCourse;
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async searchAnswer(id) {
    try {
      const answerSearch = await Answer.findByPk(id);
      if (answerSearch) {
        return answerSearch;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async getAnswerOfQuestion(question_id) {
    try {
      console.log(question_id);
      const answerQuestion = await Answer.findAll({
        where: { question_id: question_id },
      });
      if (answerQuestion) {
        return answerQuestion;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async UpdateAnswer(body, id) {
    try {
      console.log(id);
      const { code, question_id, content, isTrue, score } = body;
      const answerQuestion = await Answer.findByPk(id);
      if (answerQuestion) {
       answerQuestion.update({
        code,
        question_id,
        content,
        isTrue,
        score,
       })
        return answerQuestion;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
}
module.exports = AnswerService;
