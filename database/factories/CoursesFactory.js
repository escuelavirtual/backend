const faker = require("faker");

const CoursesFactory = (records) => {
  let rows = [];
  for (let i = 1; i <= records; i++) {
    let row = {
      professorId: i,
      categoryId: i,
      title: faker.lorem.word(),
      description: faker.lorem.text(),
      isPrivate: faker.random.boolean(),
      invitationCode: faker.address.zipCode(),
      rating: faker.random.number(),
      status: faker.lorem.word(),
      startedAt: new Date(),
      finishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    rows.push(row);
  }
  return rows;
};
module.exports = CoursesFactory;
