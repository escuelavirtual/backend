const faker = require("faker");
const UserFactory = (records) => {
  let rows = [];
  for (let i = 0; i < records; i++) {
    let row = {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    rows.push(row);
  }
  return rows;
};
module.exports = UserFactory;
