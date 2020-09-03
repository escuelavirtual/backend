const faker = require("faker");
const ModulesFactory = (records) => {
  let rows = [];
  for (let i = 1; i <= records; i++) {
    let row = {
      courseId: i,
      title: faker.lorem.word(),
      description: faker.lorem.text(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    rows.push(row);
  }
  return rows;
};
module.exports = ModulesFactory;
