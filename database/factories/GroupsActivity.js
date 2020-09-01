const faker = require("faker");
const GroupsActivity = (records) => {
  let rows = [];
  for (let i = 1; i <= records; i++) {
    let row = {
      moduleId: i,
      activity_name: faker.lorem.word(),
      instructions: faker.commerce.productDescription(),
      grade: faker.random.number(),
      comments: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    rows.push(row);
  }
  return rows;
};
module.exports = GroupsActivity;
