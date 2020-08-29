'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      //se requiere comentar group_activiy
<<<<<<< HEAD:migrations/20200825023521-create-student.js
      group_activity_id:{
=======
      group_activityId:{
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa:database/migrations/20200825023521-create-student.js
        type:Sequelize.INTEGER,
        references: { model: 'group_activities', key: 'id' },
        allowNull:false
      },
<<<<<<< HEAD:migrations/20200825023521-create-student.js
      user_id:{
=======
      userId:{
>>>>>>> 6611010e5ff72f665ea1c19f34f0b369f5adaaaa:database/migrations/20200825023521-create-student.js
         type:Sequelize.INTEGER,
         allowNull:false,
         references:{model:'users',key:'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};