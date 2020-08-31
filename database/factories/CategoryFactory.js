const faker = require("faker");
const CategoryFactory=(repeatcategory)=>{
        let arrcategory=[]
        for(let i=0;i<repeatcategory;i++){
        let obj={
            name: faker.lorem.word(),
            slug: faker.lorem.slug(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        arrcategory.push(obj)
        }
        return arrcategory
}
module.exports=CategoryFactory