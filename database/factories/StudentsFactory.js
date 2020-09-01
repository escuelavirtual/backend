const StudentsFactory = (records) => {
  let arrstudent = [];
  for (let i = 1; i <= records; i++) {
    let obj = {
      group_activityId: i,
      userId: i + 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    arrstudent.push(obj);
  }
  return arrstudent;
};
module.exports = StudentsFactory;
