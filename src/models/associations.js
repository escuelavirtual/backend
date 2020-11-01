const Type_question = require("./type_question");
const Exam = require("./exam");
const Question = require("./question");
const Answer = require("./answer");

// **** associations of exam  ********************
Question.belongsTo(Type_question);
//Answer.belongsTo(Question, { onDelete: "CASCADE", hooks: true });
Answer.belongsTo(Question, { foreignKey: { name: "questionId", allowNull: false }, onDelete: "CASCADE" });
Question.hasMany(Answer, { foreignKey: { name: "questionId", allowNull: false } });
Exam.hasMany(Question);