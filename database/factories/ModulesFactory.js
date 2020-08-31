const faker = require("faker");
const ModulesFactory=(repeatmodule)=>{
        let arrmodule=[]
        for(let i=1;i<=repeatmodule;i++){
            let obj={
                courseId: i,
                title:faker.lorem.word(),
                description: faker.lorem.text(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
            arrmodule.push(obj)
       }
        return arrmodule
}
module.exports=ModulesFactory