const faker = require("faker");
 class Factor{
    constructor(){}
    //Only have 6 users => define 3 students && 3 professors
    getCategory(){
        let arrcategory=[]
        const repeatcategory=5
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
    getUsers(){
        let arruser=[]
        const repeatuser=6
        for(let i=0;i<repeatuser;i++){
        let obj={
            firstname:faker.name.firstName(),
            lastname: faker.name.lastName(),
            email:faker.internet.email(),
            password:faker.internet.password(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        arruser.push(obj)
        }
        return arruser
    }
    getProfessors(){
        let arrprofessors=[]
        const repeatprofessors=3
        for(let i=0;i<repeatprofessors;i++){
            let obj={
                userId: i+1,
                valuation:faker.random.number(),
                createdAt: new Date(),
                updatedAt: new Date()
              }
            arrprofessors.push(obj)
        }
        return arrprofessors
    }
    getCourse(){
        let arrcourse=[]
        const repeatcourse=3
        for(let i=0;i<repeatcourse;i++){
            let obj={
                professorId:i+1,
                categoryId:i+1,
                title:faker.lorem.word(),
                description:faker.lorem.text(),
                isPrivate:faker.random.boolean(),
                invitationCode:faker.address.zipCode(),
                rating:faker.random.number(),
                status:faker.lorem.word(), //cambiar aca
                startedAt:new Date(),
                finishedAt:new Date(),
                createdAt: new Date(),
                updatedAt: new Date(),
            }
            arrcourse.push(obj)
        }
        return arrcourse
    }
    getModule(){
        let arrmodule=[]
        const repeatmodule=3
       for(let i=0;i<repeatmodule;i++){
            let obj={
                courseId: i+1,
                title:faker.lorem.word(),
                description: faker.lorem.text(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
            arrmodule.push(obj)
       }
       return arrmodule
    }
    getGroupActivity(){
        let arrgroup=[]
        const repeatgroup=3
        for(let i=0;i<repeatgroup;i++){
            let obj={
                moduleId: i+1,
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
    getStudent(){
        let arrstudent=[]
        const repeatstudent=3
        for(let i=0;i<repeatstudent;i++){
            let obj={
                group_activityId: i+1,
                userId:i+4,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            arrstudent.push(obj)
        }
        return arrstudent
    }
    getEnrollments(){
        let arrenrollment=[]
        const repeatenrolment=3
        for(let i=0;i<repeatenrolment;i++){
            let obj={
                studentId: i+1,
                courseId:i+1,
                calification:faker.random.number(),
            }
            arrenrollment.push(obj)
        }
        return arrenrollment
    }

}
module.exports = new Factor()