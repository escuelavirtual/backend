const faker = require("faker");

const CategoryFactory = (records) => {
  let rows = [];
  for (let i = 1; i <= records; i++) {
    let row = {
      name: faker.lorem.word(),
      slug: faker.lorem.slug(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    rows.push(row);
  }
  return rows;
};
module.exports = CategoryFactory;