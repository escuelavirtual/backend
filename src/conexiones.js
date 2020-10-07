const Type_question = require("../src/models/type_question");
const Exam = require("../src/models/exam");
const Question = require("../src/models/question");
const Answer = require("../src/models/answer");

// **** relation of exam  ********************
Question.belongsTo(Type_question);
Question.hasMany(Answer);
Exam.hasMany(Question);