const User=require('./models/user');
const Professor=require('./models/professor');
const Course = require('./models/course');
const Enrollment = require("./models/enrollment")

User.hasOne(Professor, {
    foreignKey: {
      name: 'id_user',
      allowNull: false
    }
  });
// Professor.belongsTo(User);

Professor.hasMany(Course, {
    foreignKey: {
        name: 'id_professor',
        allowNull: false
    }
});

//relation ship studen wiith enrollment && enrollment course
// User.belongsToMany(Course,{through:Enrollment});
// Course.belongsToMany(User,{through:Enrollment});

User.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(User, { through: Enrollment });
// Course.belongsTo(Professor);
