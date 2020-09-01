const faker = require("faker");
const EnrollmentFactory = (records) => {
  let rows = [];
  for (let i = 1; i <= records; i++) {
    let row = {
      studentId: i,
      courseId: i,
      calification: faker.random.number(),
    };
    rows.push(row);
  }
  return rows;
};
module.exports = EnrollmentFactory;
