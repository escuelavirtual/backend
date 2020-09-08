const Answer = require("../models/answer");
const { check } = require("express-validator"); 

class AnswerService {

  
  static validate(){
    return [
      check('code', 'code is required').not().isEmpty(),
      check('question_id', 'question_id is required').not().isEmpty(),
      check('content', 'content is required').not().isEmpty(),
      check('isTrue', 'isTrue is required').not().isEmpty(),
      check('score', 'score is required').not().isEmpty(),
    ];
}


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
  static async createAnswer(data) {
    try {
      const { code, question_id, content, isTrue, score } = data;
      const answerscourse = await Answer.create({
        code,
        question_id,
        content,
        isTrue,
        score,
      });
      return answerscourse;
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async searchAnswer(id) {
    try {
      const answersearch = await Answer.findByPk(id);
      if (answersearch) {
        return answersearch;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async getAnswerQuestion(question_id) {
    try {
      const answerquestion = await Answer.findAll({
        where: { question_id: question_id },
      });
      if (answerquestion) {
        return answerquestion;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }
  static async deleteAnswerQuestion(id){
   try{
        const answerdelete= await Answer.findByPk(id);
        if(answerdelete){
            await answerdelete.destroy()
            return answerdelete
        }
   }catch(err){
     return new Error("An error has ocurred");
   }
  }

  static async updateAnswer(data, id) {
    try {
      const { code, question_id, content, isTrue, score } = data;
      const answerquestion = await Answer.findByPk(id);
      if (answerquestion) {
        answerquestion.update({
        code,
        question_id,
        content,
        isTrue,
        score,
       })
        return answerquestion;
      }
    } catch (err) {
      return new Error("An error has ocurred");
    }
  }

}
module.exports = AnswerService;
