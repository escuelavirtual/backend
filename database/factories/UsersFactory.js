const faker = require("faker");
const UserFactory=(repeatuser)=>{
        let arruser=[]
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
module.exports = UserFactory