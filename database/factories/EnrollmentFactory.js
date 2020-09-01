const faker = require("faker");
const EnrollmentFactory = (records) => {
  let arrenrollment = [];
  for (let i = 1; i <= records; i++) {
    let obj = {
      studentId: i,
      courseId: i,
      calification: faker.random.number(),
    };
    arrenrollment.push(obj);
  }
  return arrenrollment;
};
module.exports = EnrollmentFactory;
