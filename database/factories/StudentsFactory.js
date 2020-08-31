const StudentsFactory=(repeatstudent)=>{
        let arrstudent=[]
        for(let i=1;i<=repeatstudent;i++){
            let obj={
                group_activityId: i,
                userId:i+3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            arrstudent.push(obj)
        }
        return arrstudent
}
module.exports=StudentsFactory