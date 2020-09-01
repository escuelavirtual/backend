const faker = require("faker");
const GroupsActivity = (records) => {
  let arrgroup = [];
  for (let i = 1; i <= records; i++) {
    let obj = {
      moduleId: i,
      activity_name: faker.lorem.word(),
      instructions: faker.commerce.productDescription(),
      grade: faker.random.number(),
      comments: faker.lorem.paragraph(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    arrgroup.push(obj);
  }
  return arrgroup;
};
module.exports = GroupsActivity;
