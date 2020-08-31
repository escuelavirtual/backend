const faker = require("faker");
const CoursesFactory=(repeatcourse)=>{
        let arrcourse=[]
        for(let i=1;i<=repeatcourse;i++){
            let obj={
                professorId:i,
                categoryId:i,
                title:faker.lorem.word(),
                description:faker.lorem.text(),
                isPrivate:faker.random.boolean(),
                invitationCode:faker.address.zipCode(),
                rating:faker.random.number(),
                status:faker.lorem.word(), 
                startedAt:new Date(),
                finishedAt:new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            }
            arrcourse.push(obj)
        }
        return arrcourse
}
module.exports = CoursesFactory