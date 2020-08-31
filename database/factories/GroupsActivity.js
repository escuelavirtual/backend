const faker = require("faker");
const GroupsActivity=(repeatgroup)=>{
        let arrgroup=[]
        for(let i=1;i<=repeatgroup;i++){
            let obj={
                moduleId: i,
                activity_name:faker.lorem.word(),
                instructions:faker.commerce.productDescription(),
                grade:faker.random.number(),
                comments:faker.lorem.paragraph(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
            arrgroup.push(obj)
       }
        return arrgroup
}
module.exports=GroupsActivity