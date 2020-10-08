const Type_question = require("./type_question");
const Exam = require("./exam");
const Question = require("./question");
const Answer = require("./answer");

// **** associations of exam  ********************
Question.belongsTo(Type_question);
Question.hasMany(Answer);
Exam.hasMany(Question);