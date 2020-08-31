const faker = require("faker");
const EnrollmentFactory=(repeatenrolment)=>{
    let arrenrollment=[]
    for(let i=1;i<=repeatenrolment;i++){
        let obj={
            studentId: i,
            courseId:i,
            calification:faker.random.number(),
        }
        arrenrollment.push(obj)
    }
    return arrenrollment
}
module.exports=EnrollmentFactory