const faker = require("faker");
const ProfessorsFactory = (records) => {
  let rows = [];
  for (let i = 1; i <= records; i++) {
    let row = {
      userId: i,
      valuation: faker.random.number(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    rows.push(row);
  }
  return rows;
};
module.exports = ProfessorsFactory;
