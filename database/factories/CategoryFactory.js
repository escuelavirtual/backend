const faker = require("faker");
const {factory} = require("./factory")
// const CategoryFactory = (records) => {
//   let rows = [];
//   for (let i = 1; i <= records; i++) {
//     let row = {
//       name: faker.lorem.word(),
//       slug: faker.lorem.slug(),
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };
//     rows.push(row);
//   }
//   return rows;
// };
// module.exports = CategoryFactory;

// const CategoryFactory = (records)=>{
//     const row={
//         name: faker.lorem.word(),
//         slug: faker.lorem.slug(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//   }
//   return factory(row,records)
// }

// module.exports = CategoryFactory

// exports.CategoryFactory = (records)=>{
//     const row={
//         name: faker.lorem.word(),
//         slug: faker.lorem.slug(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     }
//     return factory(row,records)
// }

const row={
        name: faker.lorem.word(),
        slug: faker.lorem.slug(),
        createdAt: new Date(),
        updatedAt: new Date(),
}
module.exports = row