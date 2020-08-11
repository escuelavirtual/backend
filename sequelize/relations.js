const User=require('./models/user');
const Professor=require('./models/professor');
const Course = require('./models/course');

User.hasOne(Professor, {
    foreignKey: {
      name: 'id_professor',
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
// Course.belongsTo(Professor);
