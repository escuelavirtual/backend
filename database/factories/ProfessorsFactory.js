const faker = require("faker");
const ProfessorsFactory = (records) => {
  let arrprofessors = [];
  for (let i = 1; i <= records; i++) {
    let obj = {
      userId: i,
      valuation: faker.random.number(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    arrprofessors.push(obj);
  }
  return arrprofessors;
};
module.exports = ProfessorsFactory;
